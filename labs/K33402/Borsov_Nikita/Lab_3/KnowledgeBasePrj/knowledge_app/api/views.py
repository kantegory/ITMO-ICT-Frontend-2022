from rest_framework import generics, status, viewsets
from rest_framework.exceptions import ValidationError
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from knowledge_app.api.permissions import IsAuthorOrReadOnly
from knowledge_app.api.serializers import AnswerSerializer, QuestionSerializer
from knowledge_app.models import Answer, Question


class QuestionViewSet(viewsets.ModelViewSet):
    """Provide CRUD +L functionality for Question."""

    queryset = Question.objects.all().order_by("-created_at")
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated, IsAuthorOrReadOnly]
    lookup_field = "slug"

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class AnswerCreateAPIView(generics.CreateAPIView):
    """Allow users to answer a question instance if they haven't already."""
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]
    def perform_create(self, serializer):
        request_user = self.request.user
        kwarg_slug = self.kwargs.get("slug")
        question = get_object_or_404(Question, slug=kwarg_slug)

        if question.answers.filter(author=request_user).exists():
            raise ValidationError("You have already answered this Question!")

        serializer.save(author=request_user, question=question)


class AnswerRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    """Provide *RUD functionality for an answer instance to it's author."""

    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated, IsAuthorOrReadOnly]
    lookup_field = "uuid"


class AnswerListAPIView(generics.ListAPIView):
    """Provide the answers queryset of a specific question instance."""

    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        kwarg_slug = self.kwargs.get("slug")
        return Answer.objects.filter(question__slug=kwarg_slug).order_by("-created_at")


class AnswerLikeAPIView(APIView):
    """Allow users to add/remove a like to/from an answer instance."""

    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "uuid"

    def delete(self, request, uuid):
        """Remove request.user from the voters queryset of an answer instance."""
        answer = get_object_or_404(Answer, uuid=uuid)
        user = request.user

        answer.voters.remove(user)
        answer.save()

        serializer_context = {"request": request}
        serializer = self.serializer_class(answer, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, uuid):
        """Add request.user to the voters queryset of an answer instance."""
        answer = get_object_or_404(Answer, uuid=uuid)
        user = request.user

        answer.voters.add(user)
        answer.save()

        serializer_context = {"request": request}
        serializer = self.serializer_class(answer, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)

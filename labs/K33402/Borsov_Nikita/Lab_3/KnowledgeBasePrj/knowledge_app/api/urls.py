from django.urls import include, path
from rest_framework.routers import DefaultRouter

from knowledge_app.api import views as qv

router = DefaultRouter()
router.register(r"questions", qv.QuestionViewSet)

urlpatterns = [
    path("", include(router.urls)), 

    path("questions/<slug:slug>/answers/",
         qv.AnswerListAPIView.as_view(),
         name="answer-list"),

    path("questions/<slug:slug>/answer/",
         qv.AnswerCreateAPIView.as_view(),
         name="answer-create"),

    path("answers/<uuid:uuid>/", 
         qv.AnswerRUDAPIView.as_view(),
         name="answer-detail"),

    path("answers/<uuid:uuid>/like/",
         qv.AnswerLikeAPIView.as_view(),
         name="answer-like")
]
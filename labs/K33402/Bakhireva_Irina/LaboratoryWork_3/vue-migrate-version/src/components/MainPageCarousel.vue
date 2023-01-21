<template>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class=""></li>
      <li data-target="#myCarousel" data-slide-to="1" class=""></li>
      <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img class="first-slide" src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132206/news-slider/background.webp" alt="Картинка темного стекла на первом слайде карусели">
        <div class="container">
          <div class="carousel-caption text-left">
            <h1>Ищи мероприятия с бесплатным кейтрингом</h1>
            <p>Каждую неделю в городе проходит более 100 мероприятий где можно поесть бесплатно - будь в курсе их всех</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="second-slide" src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132206/news-slider/background.webp" alt="Картинка темного стекла на втором слайде карусели">
        <div class="container">
          <div class="carousel-caption">
            <h1>Научные конференции или собрания байкеров</h1>
            <p>Сортируй мероприятия с помощью фильтров чтобы найти те, на которых ты будешь чувствовать себя наиболее комфортно</p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <img class="third-slide" src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132206/news-slider/background.webp" alt="Картинка темного стекла на тертьем слайде карусели">
        <div class="container">
          <div class="carousel-caption text-right">
            <h1>Сохраняй меропрития в личном кабинете</h1>
            <p>Зарегистрируйся уже сегодня чтобы сохранить все крутые мероприятия.</p>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>

<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
  <p class="lead"> Используй Food Events Aggregator чтобы найти подходящее мероприятие на нашей доске событий.</p>
</div>

<div class="container">
<div class="card-deck mb-1 text-center">
      <div class="card-body">
        <button type="button" class="btn btn-lg btn-block btn-outline-primary" @click="$router.push('/event_board')">Искать мероприятия</button>
      </div>
</div>
</div>
</template>

<script>
export default {
    name: "MainPageCarousel"
}
</script>

<style scoped>

</style>

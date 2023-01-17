<template>
  <header class='masthead'>
    <p class='masthead-intro'>Hi I'm</p>
    <h1 class='masthead-heading'>Naseeb!</h1>
  </header>
  <section class="introduction-section">
    <h1>Introduction</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea ex iste perferendis quae. Facere fugit </p>
    <p>I love the internet, technology, and building beautiful things.</p>
  </section>
  <section class="location-section">
    <h1>Where I'm From</h1>
    <p>I'm originally from ....., ....... </p>
  </section>
  <section class="questions-section">
    <h1>More About Me</h1>
    <h2>What are your favorite hobbies?</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, autem consequuntur culpa dicta dignissimos dolore doloribus, eos est et nesciunt possimus, reprehenderit suscipit tenetur ut.</p>
    <h2>What's your dream job?</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus esse labore magni, necessitatibus nemo odio officia pariatur quis quisquam recusandae rem repudiandae temporibus veritatis.</p>
    <h2>Where do you live?</h2>
    <p>I live in Saint-Petersburg</p>
    <h2>Why do you want to be a web developer?</h2>
    <p>Because programming is awesome and programming for the internet is even more awesome.</p>
  </section>

</template>
<script></script>
<style scoped>

.masthead-heading,
.masthead-intro {
  text-align: center;
}

.masthead {
  padding: 6em 0;
  background-image: url('https://i.imgur.com/yGmrlyg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  border-top: solid 1em #FFCF33;
}

.masthead-intro {
  /* Layout Declarations */
  margin-bottom: 0.1em;
  /* Typography Declarations */
  font-family: "Gentium Book Basic", Georgia, serif;
  font-size: 2em;
}

.masthead-heading {
  /* Layout Declarations */
  color: #F1C863;
  margin-top: -0.2em;
  /* Typography Declarations */
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 6em;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.introduction-section,
.location-section,
.questions-section {
  max-width: 38em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
}

.introduction-section > p,
.location-section > p,
.questions-section{
  /* Typography Declarations */
  font-weight: 300;
  letter-spacing: 0.05em;
}

.questions-section > h2 {
  font-family: "Gentium Book Basic", Georgia, serif;
  font-size: 1.2em;
  font-weight: bold;
  /* Layout */
  margin: 2em 0 1em 0;
}

section > h1 {
  margin-top: 2em;
}

.masthead-heading,
.masthead-intro {
  text-align: center;
}

.masthead {
  padding: 6em 0;
  background-image: url('https://i.imgur.com/yGmrlyg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  border-top: solid 1em #FFCF33;
}

.masthead-intro {
  margin-bottom: 0.1em;
  font-family: "Gentium Book Basic", Georgia, serif;
  font-size: 2em;
}

.masthead-heading {
  margin-top: -0.2em;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 6em;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.introduction > p,
.location > p {
  /* Typography Declarations */
  font-weight: 300;
  letter-spacing: 0.05em;
}
h2 {
  /* Typography Declarations */
  font-family: "Gentium Book Basic", Georgia, serif;
  font-size: 1.2em;
  font-weight: bold;
}

.introduction-section,
.location-section,
.questions-section {
  max-width: 38em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #F1C863;
}

@media only screen and (max-width: 500px) {
  .masthead {
    padding: 3em 0;
  }
  .masthead-heading {
    font-size: 3em;
  }

}
</style>
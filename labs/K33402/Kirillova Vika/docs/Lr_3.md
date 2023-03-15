# Лабораторная работа 3: Разработка одностраничного веб-приложения (SPA) с использованием фреймворка Vue.JS

Мигрировать ранее написанный сайт на фреймворк Vue.JS.


Минимальные требования:

1 Должен быть подключён роутер

2 Должна быть реализована работа с внешним API

3 Разумное деление на компоненты


* `router/index.js`

Роутер и все доступные нам urlы на которые можно зайти

```js
import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import CalendarView from '@/views/CalendarView.vue'
import PersonalView from '@/views/PersonalView.vue'
import EntryView from '@/views/EntryView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import EventView from '@/views/EventView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/calendar/',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/lk/',
      name: 'lk',
      component: PersonalView
    },
    {
      path: '/entry/',
      name: 'entry',
      component: EntryView
    },
    {
      path: '/registration/',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/event/',
      name: 'event',
      component: EventView
    },
  ]
})

export default router
```

## Дальше представлены все компоненты нашего сайта

* `Card.vue`

Шаблон карточки для подгрузки в mainPage

```vue
<template>
  <img :src="image" class="card-img-top" width="262" height="262" :alt="event" style="object-fit: cover;">
  <div class="card-body">
    <h3 class="card-name">{{ name }}</h3>
    <p class="card-text">{{ event }}</p>
    <p class="card-data">{{ place }}</p>
  <a href="#" class="btn btn-primary" @click="$router.push('/event')">Event page</a>
  <form action="" @submit.prevent="subscribe(id)">
    <button type="submit" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Subscribe<svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#register-icon"></use></svg>
    </button>
  </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";

import useUserEventsStore from "@/stores/userEvents.js"

export default {
  name: 'CardNote',

  computed: {
    ...mapState(useUserEventsStore, ['userEvents']),
  },

  props: {
    name: {
      type: String,
      required: true
    },
    event: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
  },

  methods: {
    ...mapActions(useUserEventsStore, ['addUserEvents']),

    async subscribe(id) {
      const userEvents = {
        "userId": JSON.parse(localStorage.user).id,
        "cardId": id
      }
      await this.addUserEvents(userEvents);
    }
  }
}

</script>
```

* `PersonalCard.vue`

Шаблон карточки для личного кабинета

```vue
<template>
  <img :src="image" class="card-img-top" width="262" height="262" :alt="event" style="object-fit: cover;">
  <div class="card-body">
    <h3 class="card-title">{{ name }}</h3>
    <p class="card-text">{{ event }}</p>
    <p class="card-data">{{ place }}</p>
  <form action="" @submit.prevent="deleteCard(primaryId)">
    <button type="submit" class="btn btn-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Unsubscribed
    </button>
  </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";

import useUserEventsStore from "@/stores/userEvents.js"

export default {
  name: 'PersonalCard',
  
  computed: {
    ...mapState(useUserEventsStore, ['userEvents']),
  },

  methods: {
    ...mapActions(useUserEventsStore, ['addUserEvents', 'deleteCardById']),

    async deleteCard(id) {
      this.deleteCardById(id)

      location.reload()
    }
  },

  props: {
    name: {
      type: String,
      required: true
    },
    event: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    primaryId: {
      type: Number,
      required: true
    },
  },
}

</script>
```

* `Entry.vue`

Компонента входа

```vue
<template>
  <main class="container-xl p-5 mb-5">
    <form class="d-flex-column" @submit.prevent="login">
      <h1 class="row mb-5 justify-content-center">Login</h1>
      <div class="row mb-3 justify-content-center">
        <label for="email" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-3 col-md-4">
          <input type="text" class="form-control" v-model="form.email" name="email" id="email" autocomplete="off" placeholder="vika@gmail.com">
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="password" class="col-sm-1 col-form-label">Password</label>
        <div class="col-sm-3 col-md-4">
          <input type="password" class="form-control" v-model="form.password" name="password" id="password" autocomplete="off" placeholder="vika1234">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-4 col-md-5">
          <button type="submit" class="btn btn-primary" :to="{ path: '/' }">Sign in</button>
          <a class="btn btn-primary" href="#" @click="$router.push('/registration/')" role="button">Registration</a>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions } from 'pinia'
import router from '@/router'

import useLoginStore from '../stores/login'

export default {
  name: 'EntryBlock',

  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    ...mapActions(useLoginStore, ['userLogin']),

    async login() {
      const response = await this.userLogin(this.form);

      const { accessToken, user } = response.data

      localStorage.accessToken = accessToken
      localStorage.user = JSON.stringify(user)

      localStorage.accessToken ? router.push('/') : router.push('')
    }
  }
}
</script>

```

* `Registration.vue`

Компонента регистрации

```vue
<template>
  <main class="container-xl p-5">
    <form class="d-flex-column" @submit.prevent="register">
      <h1 class="row mb-5 justify-content-center">Registration</h1>
      <div class="row mb-3 justify-content-center">
        <label for="inputName3" class="col-sm-1 col-form-label">Name</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" v-model="form.firstname" name="firstname" id="inputName3" placeholder="Vika" required>
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="inputSurname3" class="col-sm-1 col-form-label">Surname</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" v-model="form.lastname" name="lastname" id="inputSurname3" placeholder="Kirillova" required>
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="inputEmail3" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-3">
          <input type="email" class="form-control" v-model="form.email" name="email" id="inputEmail3" placeholder="vika@email.com" required>
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="inputAge3" class="col-sm-1 col-form-label">Age</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" v-model="form.age" name="age" id="inputAge3" placeholder="Vika1234" required>
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="inputPassword3" class="col-sm-1 col-form-label">Password</label>
        <div class="col-sm-3">
          <input type="password" class="form-control" v-model="form.password" name="password" id="inputPassword3" required>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-4">
          <button type="submit" class="btn btn-primary">Sign up</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import router from '@/router'

import useRegisterStore from '../stores/register'

export default {
  name: 'RegistrationBlock',

  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        age: ""
      }
    };
  },

  methods: {
    ...mapActions(useRegisterStore, ['userRegister']),

    async register() {
      const response = await this.userRegister(this.form);

      const { accessToken, user } = response.data

      localStorage.accessToken = accessToken
      localStorage.user = JSON.stringify(user)

      localStorage.accessToken ? router.push('/') : router.push('')
    }
  }
}
</script>

```

* `Header.vue`

Хедер для каждой странички

```vue
<template>
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" display="none"> 
    <symbol id="personal-area" viewBox="0 0 16 16"> 
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/> 
    </symbol> 

    <symbol id="calendar" viewBox="0 0 16 16">
      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"/>
      <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"/>
    </symbol>

    <symbol id="exit-door" viewBox="0 0 16 16"> 
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z"/>
    </symbol> 

    <symbol id="entry-door" viewBox="0 0 16 16"> 
      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
      <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
    </symbol> 
  
    <symbol id="main-icon" viewBox="0 0 16 16"> 
      <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H3Zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/>
    </symbol> 
  
    <symbol id="register-icon" viewBox="0 0 16 16"> 
      <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z"/>
    </symbol> 
  
    <symbol id="search-icon" viewBox="0 0 16 16"> 
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> 
    </symbol> 
  </svg>

  <header class="container-fluid colors pb-2 pt-2">
    <nav class="navbar navbar-expand-md d-flex justify-content-between">
      <div>
        <a class="colors navbar-brand text-color fs-4 p-2" href="#" @click="$router.push('/')"><svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#main-icon"></use></svg>Main</a>
        <a class="colors navbar-brand text-color fs-5 p-2" href="#" @click="$router.push('/lk/')"><svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#personal-area"></use></svg>Personal area</a>
        <a class="colors navbar-brand text-color fs-6 p-2" href="#" @click="$router.push('/calendar/')"><svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#calendar"></use></svg>Calendar</a>
      </div>
      <div>
        <a id="entry" class="colors navbar-brand text-color fs-6" href="#" @click="$router.push('/entry/')"><svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#entry-door"></use></svg>Entry</a>
        <a id="exit" class="colors navbar-brand text-color fs-6 button-logout" href="#" @click="logout()"><svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#exit-door"></use></svg>Exit</a>
        <a id="registr" class="colors navbar-brand text-color fs-6" href="#" @click="$router.push('/registration/')"><svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#register-icon"></use></svg>Register</a>
      </div>
    </nav>
  </header>
</template>

<script>
import router from '@/router'

export default {
  name: 'HeaderBlock',

  methods: {
    check() {
      const entryButton = document.querySelector('#entry');
      const registerButton = document.querySelector('#registr');
      const exitButton = document.querySelector('#exit');

      if (localStorage.accessToken) {
        entryButton.classList.add('d-none');
        registerButton.classList.add('d-none');
        exitButton.classList.remove('d-none');
      } else {
        entryButton.classList.remove('d-none');
        registerButton.classList.remove('d-none');
        exitButton.classList.add('d-none');
      }
    },

    logout() {
      localStorage.clear();

      document.querySelector('#entry').classList.remove('d-none');
      document.querySelector('#registr').classList.remove('d-none');
      document.querySelector('#exit').classList.add('d-none');

      router.push('/entry')
    }
  },

  mounted() {
    this.check()
  }
}

</script>

```

* `Footer.vue`

Футер для каждой страницы

```vue
<template>
  <footer class="container-fluid colors">
    <div class="d-flex justify-content-between py-4 mb-0 text-color">
      <p>Made by Vika Kirillova</p>
      <p>Frontend 2022-2023</p>
    </div>
  </footer>
</template>

<script>
export default{
  name: 'FooterBlock',
}

</script>
```

* `Main.vue`

Компонента основной страницы

```vue
<template>
  <svg display="none">
    <symbol id="search-icon" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </symbol>
  </svg>

  <main class="container-fluid background-main">
    <section class="d-flex flex-column align-items-center pt-5">
      <h1 class="h1 mb-4 text-color">Current events</h1>
      <div class="d-flex justify-content-center m-0">
        <p class="fs-5 pe-3 text-color">Sort</p>
        <div class="dropdown me-3">
          <select class="form-select-sm event-type" aria-label=".form-select-lg example">
            <option value="all">Select the type of event</option>
            <option value="Master-class">Master class</option>
            <option value="Show">Show</option>
          </select>
        </div>
        <div class="dropdown me-3">
          <select class="form-select-sm subway-type" aria-label=".form-select-lg example">
            <option value="everything">Choose subway</option>
            <option value="Zvenigorodskaya">Zvenigorodskaya</option>
            <option value="Gorkovskaya">Gorkovskaya</option>
            <option value="Spasskaya">Spasskaya</option>
          </select>
        </div>
        <form class="search-form d-flex justify-content-end col-12 col-sm-2 col-lg-4 col-xl-6" @submit.prevent="filter">
          <button type="submit" id="search" class="btn btn-info btn-sm " style="background-color:#77d260; border: 1px solid #77d260;"><svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#search-icon"></use></svg>Search</button>
        </form>
      </div>
      <div class="d-flex justify-content-center pt-5 pb-5">
        <div class="card me-4 card-colors background text-color mb-3" style="width: 18rem;" data-event-id="{{ id }}" v-for="card in filteredCards" :key="card.id">
          <card-note :name="card.name" :image="card.image" :event="card.event" :place="card.place" :id="card.id"></card-note>
        </div>
      </div>
    </section>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">You are recorded</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            We are waiting for you at our event in a good mood
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";

import useCardsStore from "@/stores/cards.js"

import CardNote from "@/components/Card.vue"

export default {
  name: 'MainBlock',

  components: { CardNote },

  computed: {
    ...mapState(useCardsStore, ['cards']),

    filteredCards() {
      return this.cards
    }
  },

  methods: {
    ...mapActions(useCardsStore, ['loadCards', 'filterCards']),

    async filter() {
      const eventT = document.querySelector('.event-type')
      const cityT = document.querySelector('.subway-type')

      const url1 = eventT.value !== "all" ? `event=${eventT.value}&` : ""
      const url2 = cityT.value !== "everything" ? `place=${cityT.value}` : ""

      this.filterCards(url1 + url2);
    }
  },

  mounted() {
    this.loadCards();
  }
}
</script>

```

* `Personal.vue`

Компонента личного кабинета

```vue
<template>
  <main class="row mx-auto d-flex pt-5 container-fluid background-main">
    <section class="container row mx-auto">
      <div class="row d-flex justify-content-start col-md-5 col-lg-5 col-xl-3 col-12 col-sm-12">
        <img src="../assets/image/profile.jpg" alt="..." style="padding: 0">
      </div>
      <div class="row d-flex justify-content-start col-xl-6 col-lg-7 col-md-7 col-9 col-sm-12">
        <h1 class="text-color mt-1 custom-colored-h1">Kirillova Vika</h1>
        <h2 class="text-color mt-4 h5 custom-colored-h1">Member of the club since January 2022</h2>
        <h3 class="text-color mt-4 h4 custom-colored-h1">My telegram<a class="m-5" href="https://t.me/@kirillovavi">Telegram</a></h3>
      </div>
      <h3 class="text-color mt-5 h4 custom-colored-h1">My event list:</h3>
    </section>
    <section class="container d-flex justify-content-center mx-auto mb-5" id="container">
      <div class="d-flex justify-content-center" id="container" style="flex-wrap: wrap;">
        <div class="card me-4 card-colors background text-color mb-3" style="width: 18rem;" data-event-id="{{ id }}" v-for="card in personalCards" :key="card.id">
          <personal-card :name="card.name" :image="card.image" :event="card.event" :place="card.place" :primaryId="card.primaryId"></personal-card>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";

import useCardsStore from "@/stores/cards.js"
import useUserEventsStore from "@/stores/userEvents.js"

import PersonalCard from "@/components/PersonalCard.vue"

export default {
  name: 'PersonalBlock',

  components: { PersonalCard },

  computed: {
    ...mapState(useUserEventsStore, ['userEvents']),
    ...mapState(useCardsStore, ['personalCards']),
  },

  methods: {
    ...mapActions(useUserEventsStore, ['getUserEventsById']),
    ...mapActions(useCardsStore, ['loadCardById', 'doClear']),

    async loadPage() {
      const response = await this.getUserEventsById(JSON.parse(localStorage.user).id);

      const result = Array.from(response.data);

      this.doClear();
      result.forEach((item) => {
        this.loadCardById(item.cardId, item.id)
      })
    }
  },

  mounted() {
    this.loadPage();
  }
}
</script>
```


* `FullCalendar.vue`

Компонента календаря

```vue
 <template>
  <full-calendar :options="calendarOptions" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const DEFAULT_OPTIONS = {
  plugins: [ dayGridPlugin, interactionPlugin ],
  initialView: 'dayGridMonth',
  editable: true
}

export default {
  components: {
    FullCalendar
  },

  props: {
    options: {
      type: Object,
      default: DEFAULT_OPTIONS
    }
  },

  computed: {
    calendarOptions() {
      return { ...DEFAULT_OPTIONS, ...this.options }
    }
  }
}
</script>

<style>
.fc-day {
  cursor: pointer;
}
</style>
```

## Дальше представлены все файлы с API в нашей работе

* `index.js`

Файл с обьявлением всех API

```js
import instance from "@/api/instance.js"
import CardApi from "@/api/cards.js"
import CalendarEventsApi from "@/api/calendarEvents"
import LoginApi from "@/api/login";
import RegisterApi from "@/api/register";
import UserCardApi from "@/api/userCard";

const cardApi = new CardApi(instance);
const calendarEventsApi = new CalendarEventsApi(instance);
const loginApi = new LoginApi(instance);
const registerApi = new RegisterApi(instance);
const userCardApi = new UserCardApi(instance);

export { cardApi, calendarEventsApi, loginApi, registerApi, userCardApi }
```

* `instance.js`

```js
import axios from 'axios'

const apiURL = 'http://localhost:3000'

const instance = axios.create({
	baseURL: apiURL
})

export default instance

```

* `cards.js`

API получения карточек

```js
export default class CardApi {
  constructor(instance) {
    this.API = instance
  }

  getAll = async () => {
    return this.API({
      url: '/cards'
    })
  }

  getById = async (id) => {
    return this.API({
      url: `/cards/${id}`
    })
  }

  getFilter = async (link) => {
    console.log(link)
    return this.API({
      url: `/cards?${link}`
    })
  }
}


```

* `calendarEvents.js`

API для календаря

```js
class CalendarEventsApi {
  constructor(instance) {
    this.API = instance
  }

  getAll = async () => {
    return this.API({
      url: '/calendarEvents'
    })
  }

  getById = async (id) => {
    return this.API({
      url: `/calendarEvents/${id}`
    })
  }

  deleteEv = async (id) => {
    return this.API({
      url: `/calendarEvents/${id}`,
      method: 'DELETE'
    })
  }

  create = async (data) => {
    return this.API({
      url: '/calendarEvents',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}

export default CalendarEventsApi
```

* `login.js`

API для логина

```js
export default class LoginApi {
  constructor(instance) {
    this.API = instance
  }

  userLogin = async (data) => {
    return this.API({
      method: 'POST',
      url: '/login',
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
```

* `register.js`

API для регистрации

```js
export default class RegisterApi {
  constructor(instance) {
    this.API = instance
  }

  userRegister = async (data) => {
    return this.API({
      method: 'POST',
      url: '/register',
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
```

## Все stores в проекте

* `index.js`

Общий store с pinia

```js
import { persist } from 'pinia-persists'
import { createPinia } from 'pinia'

const pinia = createPinia()

pinia.use(persist())

export default pinia
```

* `cards.js`

```js
import { defineStore } from 'pinia'
import { cardApi } from '@/api'

const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: [],
    personalCards: []
  }),

  actions: {
    async loadCards() {
      const response = await cardApi.getAll();

      this.cards = response.data;

      return response;
    },

    async filterCards(link) {
      const response = await cardApi.getFilter(link);

      this.cards = response.data

      return response;
    },

    async loadCardById(eventId, id) {
      const response = await cardApi.getById(eventId);

      response.data.primaryId = id;

      this.personalCards.push(response.data)

      return response
    },

    async doClear() {
      this.personalCards = []
    }
  }
})

export default useCardsStore
```

* `login.js`

store для логина

```js
import { defineStore } from 'pinia'
import { loginApi } from '@/api'

const useLoginStore = defineStore('users', {
  state: () => ({
    users: []
  }),

  actions: {
    async userLogin(data) {
      const response = await loginApi.userLogin(data)

      this.users = response.data

      return response
    }
  }
})

export default useLoginStore
```

* `register.js`

store для регистрации

```js
import { defineStore } from 'pinia'
import { registerApi } from '@/api'

const useRegisterStore = defineStore('users', {
  state: () => ({
    users: []
  }),

  actions: {
    async userRegister(data) {
      const response = await registerApi.userRegister(data)

      this.users = response.data

      return response
    }
  }
})

export default useRegisterStore
```

* `userEvents.js`

store для userEvents

```js
import { defineStore } from 'pinia'
import { userCardApi } from '@/api'

const useUserEventsStore = defineStore('userEvents', {
  state: () => ({
    userEvents: []
  }),

  actions: {
    async getUserEventsById(id) {
      const response = await userCardApi.getById(id)

      return response
    },

    async addUserEvents(data) {
      const response = await userCardApi.createUserEvent(data)

      this.userEvents = response.data

      return response
    },

    async deleteCardById(id) {
      const response = await userCardApi.deleteById(id);

      return response
    }
  }
})

export default useUserEventsStore
```

* `calendarEvents.js`

store для calendarEvents

```js
import { defineStore } from 'pinia'
import { calendarEventsApi, cardApi } from '@/api'

const useCalendarEventsStore = defineStore('calendarEvents', {
  state: () => ({
    calendarEvents: [],
    selectedEvent: { title: '', date: '', description: '', id: "" }
  }),

  actions: {
    async loadCalendarEvents() {
      const response = await calendarEventsApi.getAll();
      // const response2 = await cardApi.getAll();
      // const jsonResponse = Array.from(response2.data);

      this.calendarEvents = response.data

      // response2.data.forEach((item) => {
      //   this.calendarEvents.push(item)
      // })

      return response
    },

    async loadEventById(id) {
      this.selectedEvent = { title: '', date: '', description: '', id: '' }

      const response = await calendarEventsApi.getById(id)
      // const response = await cardApi.getById(id)

      this.selectedEvent = response.data

      return response
    },

    async createEvent(data) {
      const response = await calendarEventsApi.create(data)

      return response
    },

    async deleteEvent(id) {
      const response = await calendarEventsApi.deleteEv(id)

      return response
    }
  }
})

export default useCalendarEventsStore
```

## Все наши views, а именно странички

* `EntryView.vue`

Страничка для авторизации

```vue
<template>
  <header-block />
  <entry-block />
  <footer-block />
</template>

<script>
import { mapActions, mapState } from 'pinia'

import useLoginStore from '../stores/login'

import HeaderBlock from '../components/Header.vue'
import EntryBlock from '../components/Entry.vue'
import FooterBlock from '../components/Footer.vue'

export default{
  name: 'EntryPage',

  components: { HeaderBlock, EntryBlock, FooterBlock },

  computed: {
    ...mapState(useLoginStore, ['users'])
  }
}
</script>

```

* `RegistrationView.vue`

Страничка регистрации нового пользователя

```vue
<template>
  <header-block />
  <registration-block />
  <footer-block />
</template>

<script>
import { mapActions, mapState } from 'pinia'

import useRegisterStore from '../stores/register'

import HeaderBlock from '../components/Header.vue'
import RegistrationBlock from '../components/Registration.vue'
import FooterBlock from '../components/Footer.vue'

export default{
  name: 'RegistrationPage',

  components: { HeaderBlock, RegistrationBlock, FooterBlock },

  computed: {
    ...mapState(useRegisterStore, ['users'])
  }
}
</script>

```

* `MainView.vue`

Главная страничка проекта

```vue
<template>
	<header-block />
	<main-block />
	<footer-block />
</template>

<script>
import { mapActions, mapState } from 'pinia'

import useCardsStore from '@/stores/cards'

import HeaderBlock from '@/components/Header.vue'
import MainBlock from '@/components/Main.vue'
import FooterBlock from '@/components/Footer.vue'

export default{
	name: 'MainPage',

	components: { HeaderBlock, MainBlock, FooterBlock },

  computed: {
    ...mapActions(useCardsStore, ['cards'])
  },

  methods: {
    ...mapActions(useCardsStore, ['loadCards']),
  },
}
</script>

```

* `PersonalView.vue`

Страничка личного кабинета

```vue
<template>
	<header-block />
	<personal-block />
	<footer-block />
</template>

<script>
import { mapActions, mapState } from 'pinia'

import HeaderBlock from '../components/Header.vue'
import PersonalBlock from '../components/Personal.vue'
import FooterBlock from '../components/Footer.vue'

export default {
	name: 'PersonalPage',

	components: { HeaderBlock, PersonalBlock, FooterBlock }
}
</script>
```

* `CalendarView.vue`

Страничка с нашим календарем

```vue
<template>
  <header-block />
  <base-layout>
    <h1>Calendar events</h1>

    <full-calendar
      :options="{
        events: calendarEvents,
        eventChange: handleEventChange,
        dateClick: handleDateClick,
        eventClick: handleEventClick
      }"
    />

    <!-- Modal -->
    <div class="modal fade" ref="detailEvent" tabindex="-1" aria-labelledby="detailEventLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="detailEventLabel">{{ selectedEvent.title }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>Description:</strong> {{ selectedEvent.description }}</p>

            <p>{{ selectedEvent.formattedDate() }}</p>
          </div>
          <div class="modal-footer">
            <form action="" @submit.prevent="deleteMero(selectedEvent.id)">
              <button type="submit" class="btn btn-danger">Delete</button>
            </form>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" ref="eventCreate" tabindex="-1" aria-labelledby="eventCreateLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="eventCreateLabel">Add event</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm" class="d-flex flex-column" ref="eventForm">
              <input type="text" v-model="form.title" class="my-1">
              <input type="date" v-model="form.date" class="my-1">
              <textarea cols="30" rows="10" v-model="form.description" class="my-1" />

              <button type="submit" class="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
  <footer-block />
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { Modal } from 'bootstrap'

import useCalendarEventsStore from '@/stores/calendarEvents'

import BaseLayout from '@/layouts/BaseLayout.vue'
import HeaderBlock from '@/components/Header.vue'
import FullCalendar from '@/components/FullCalendar.vue'
import FooterBlock from '@/components/Footer.vue'

export default {
  name: 'CalendarPage',

  components: { BaseLayout, FullCalendar, HeaderBlock, FooterBlock},

  computed: {
    ...mapState(useCalendarEventsStore, {
      calendarEvents: 'calendarEvents',
      selectedEvent: (state) => {
        return {
          ...state.selectedEvent,
          formattedDate: () => {
            const date = state.selectedEvent.date
            return new Date(date).toLocaleDateString('ru-RU')
          }
        }
      }
    })
  },

  data() {
    return {
      form: {
        title: '',
        description: '',
        date: ''
      },

      eventCreateModal: null
    }
  },

  methods: {
    ...mapActions(useCalendarEventsStore, ['loadCalendarEvents', 'loadEventById', 'createEvent', 'deleteEvent']),

    handleEventChange(payload) {
      console.log('event change', payload)
    },

    handleDateClick(payload) {
      console.log('date clicked', payload)

      const { dateStr } = payload
      this.form.date = dateStr

      this.eventCreateModal = new Modal(this.$refs.eventCreate)
      this.eventCreateModal.show()
    },

    async handleEventClick(payload) {
      await this.loadEventById(payload.event._def.publicId)

      const eventModal = new Modal(this.$refs.detailEvent)
      eventModal.show()
    },

    async submitForm() {
      await this.createEvent(this.form)

      this.$refs.eventForm.reset()
      this.eventCreateModal.hide()

      await this.loadCalendarEvents()
    },

    async deleteMero(id) {
      this.deleteEvent(id);

      location.reload();
    }
  },

  mounted() {
    this.loadCalendarEvents()
  }
}
</script>
```

## Вывод

Мы переписали наш сайт с помощью фреймворка Vue.JS и научились работать с ним
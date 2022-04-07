<template>
  <v-app>
    <v-main>
      <!-- router links -->
      <v-app-bar id="nav">
        <div class="home-link">
        <router-link to="/">Home</router-link>
        </div>
        <div class="content-links">
        <router-link to="/about">About</router-link>
        <router-link to="/team">Team</router-link>
        <router-link to="/care">Care</router-link>
        <router-link to="/find">Find</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/software">Software</router-link>
        <router-link to="/statistics">Statistics</router-link>
        <router-link to="/contact">Contact</router-link>
        </div>
      </v-app-bar>
      <!-- :key is must - because component Page used in more routes -->
      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .search .v-input__slot{
    padding: 0 31px;
  }
}

/* if app element has class dark - change her style */
#app.dark{
  background-image: linear-gradient(to right, black, darkblue)!important;

  #nav{
    background-color: transparent;

    .darkLink{
      display: none;
    }

    .lightLink{
      display: block;
    }
  }

  .content{
    color: rgb(215, 206, 215);

    .v-text-field--outlined > .v-input__control > .v-input__slot{
      color: #fff!important;
      border-color: #fff!important;
    }

    .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
      color: #fff;
    }

    .theme--light.v-label:not(.error--text),
    .theme--light.v-input:not(.error--text) input,
    .theme--light.v-input.v-textarea textarea,
    ::before,
    ::after{
      color: #fff!important;
      border-color: #fff!important;
    }

    .error--text input,
    .error--text ::before,
    .error--text ::after{
      color: #ff5252 !important;
      border-color: #ff5252 !important;
    }
  }
}

#nav{
  background-color: #fff;
  box-shadow: none;

  .v-toolbar__content{
    justify-content: space-between;
    width: 100%;
    .content-links{
      display: flex;
      gap: 15px;

    }
    .seperator{
    color: #319696ee;

    }
  }


  .lightLink{
    display: none;
  }

  a{
    display: block;
    margin-right: 8px;
    font-weight: bold;
    color: #00ffff;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    &:hover{
      border-bottom:2px solid #00ffff ;
    }
    

    &.router-link-exact-active{
      color: #00ff00;
      &:hover{
      border-bottom:2px solid #00ff00 ;
      }
    }
    /* &.router-link-exact-active+.seperator{
      color: #00ff00;
    } */
  }
}

.content{
  h2{
    text-align: center!important;
  }

  a{
    color: #00ffff!important;
  }

  .v-btn.primary{
    background-color: #00ffff!important;
    border-color: #00ffff!important;
    font-weight: bold;
  }

  .v-input.v-textarea{
    margin: 1.3rem 0;
  }

  .darkMode,.lightMode{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    text-transform: capitalize;

    div:nth-of-type(2){
      cursor: pointer;
      color: #00ffff;
      text-decoration: underline;
    }
  }
}
</style>
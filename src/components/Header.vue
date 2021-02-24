<template>
    <div>
        <section class="header-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <header>
      <nav class=" navbar navbar-expand-lg navbar-light bg-light">
        <div class=" container-fluid">
          <a class="navbar-brand" href="#">Notes Application</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      <li class="nav-item">
          <a class="nav-link" href="#">Lucky</a>
        </li>
      </ul>
          </div>
        </div>
      </nav>
    </header>
          </div>
        </div>
      </div>
    </section>   
    </div>
</template>


<script>

export default {
    name: 'Header',

    data () {
      return {
        
      }
    }

}






</script>


<style lang="scss" scoped>

.bg-light {
    background-color: #faf8f800!important;
}

.header-section {
  background-color: #1e2225;
  min-height: 50px;

  .nav-link {
    color: wheat;
    &:hover {
      color: white;
    }
  }


}


.navbar-brand {
  color: white;
  font-weight: 700;
  &:hover {
    color: #6c757d;
  }
}


</style>
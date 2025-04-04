<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                &nbsp;<font-awesome-icon :icon="['fas', 'circle-user']" /> &nbsp;
                <span class="orange-text">PORT</span>FOLIO &nbsp;&nbsp;&nbsp;&nbsp;|
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#Home"><font-awesome-icon :icon="['fas', 'house']" />&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#Abo"><font-awesome-icon :icon="['fas', 'user']" />&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#Edu"><font-awesome-icon :icon="['fas', 'book']" />&nbsp;&nbsp;Educations&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                </li>   
                <li class="nav-item">
                <a class="nav-link" href="#con"><font-awesome-icon :icon="['fas', 'address-book']" />&nbsp;&nbsp;Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>

</script>

<style>
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        padding: 0.5rem 1rem;
    }
    .orange-text {
        color: orange;
    }
    .navbar-nav .nav-item .nav-link {
        transition: color 0.3s ease-in-out;
    }

    .navbar-nav .nav-item .nav-link:hover {
        color: rgb(255, 255, 255) !important;   
    }
    .navbar-nav .nav-item .nav-link:focus {
        color: aliceblue !important;
    }
    .navbar-brand .fa-circle-user {
        font-size: 1.5rem;
        color: white;
    }
    .nav-item .fa-house{
        font-size: 1rem;
        color: white;
    }
    .nav-item .fa-book{
        font-size: 1rem;
        color: white;
    }
    .nav-item .fa-user{
        font-size: 1rem;
        color: white;
    }.nav-item .fa-address-book{
        font-size: 1rem;
        color: white;
    }
</style>
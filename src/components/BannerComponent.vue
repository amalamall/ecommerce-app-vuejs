<template>
    <div class="banner">
       <div class="container">
    <div class="wrap">
        <div class="content">
            <span>Promo</span>
            <h3 class="title">Get ready<br>Winter is coming..</h3>
            <div class="button"><a href="" class="primary-btn">Go get it</a></div>
        </div>
    </div>
  </div>   
    </div>

</template>

<script>
export default {
    name: 'BannerComponent',

}
</script>

<style>
    .banner {
        background-color: var(--light-color);
        background-image: url('../assets/images/banner.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x:right ;
        background-origin: border-box;
    }
    .banner .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
    }
    .banner .content span{
        font-size: var(--fs14);
        text-transform: uppercase;
    }

    .banner h3{
        --fs-max:80px;
    }

    @media (min-width: 768px) {
        .banner{
            background-size: contain;
        }
    }
</style>
<template>
  <div class="container">
    <div class="header-section">
      <h1>About This Project</h1>
      <p>not much to see here</p>
    </div>

    <div class="body-section">
      <div class="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint
        odio iusto natus nulla exercitationem fugit facilis fuga dolores.
        Repudiandae voluptas, alias pariatur mollitia fugiat deleniti iste nisi
        ad qui, exercitationem sint consectetur tenetur tempora beatae obcaecati
        saepe molestiae iusto officiis expedita. Cupiditate, culpa soluta
        delectus molestiae vel adipisci saepe.
      </div>
      <div class="about-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJDx2mFjavi9x_SExUtpA88UFoCWCnLJgKV6aA6rcq2SqZLXAyue7Yrwo6uMrnafcXss&usqp=CAU"
          alt="vue background"
        />
      </div>
    </div>
  </div>
</template>


<style lang='scss' scoped>
.container {
  /* border: 2px solid var(--color-primary-light);
  border-radius: 25px; */
  margin: 4rem 2rem 2rem 2rem;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
}

.header-section {
  margin-bottom: 5rem;
}

.body-section {
  display: flex;

  justify-content: space-around;
}

.about-text {
  border: 5px solid var(--color-primary-light);
  border-radius: 25px;
  padding: 1rem;

  font-size: var(--text-big);
  width: 40%;

  text-align: justify;
  vertical-align: middle;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.about-image img {
  height: 500px;
  clip-path: inset(20px round 20px);
}
</style>
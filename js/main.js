$(document).ready(function() {
  $.get("https://obscure-tundra-54269.herokuapp.com/fine-dining").done(function(
    data
  ) {
    let appetizers = data.appetizers
      .map(function(item) {
        return `
            <br />
            <dd>
              ${item.name} ---- <span class="price">$${item.price}</span>
              <br /> <br />
              <span class="descript"
                >Ingredients: ${item.description}</span
              ><span class="info">
                <ul>
                  <li>
                    <a>
                      <i class="fa fa-exclamation-circle"></i>
                      <p class="allergy">
                      <span>Allergy Warning: <br /></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nostrum, vitae architecto corporis voluptas corrupti dignissimos
            illo, cum inventore vel, ducimus earum cupiditate voluptate dicta?
          </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pepper-hot"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-bread-slice"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-carrot"></i>
                    </a>
                  </li>
                </ul>
              </span>
            </dd>
            <br />`
      })
      .join("")
    let entrees = data.entrees
      .map(function(item) {
        return `
          <br />
          <dd>
            ${item.name} ---- <span class="price">$${item.price}</span>
            <br /> <br />
            <span class="descript"
              >Ingredients: ${item.description}</span
            ><span class="info">
              <ul>
                <li>
                  <a>
                    <i class="fa fa-exclamation-circle"></i>
                    <p class="allergy">
                      <span>Allergy Warning: <br /></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nostrum, vitae architecto corporis voluptas corrupti dignissimos
            illo, cum inventore vel, ducimus earum cupiditate voluptate dicta?
          </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-pepper-hot"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-bread-slice"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-carrot"></i>
                  </a>
                </li>
              </ul>
            </span>
          </dd>
          <br />`
      })
      .join("")

    let desserts = data.desserts
      .map(function(item) {
        return `
          <br />
          <dd>
            ${item.name} ---- <span class="price">$${item.price}</span>
            <br /> <br />
            <span class="descript"
              >Ingredients: ${item.description}</span
            ><span class="info">
              <ul>
                <li>
                  <a>
                    <i class="fa fa-exclamation-circle"></i>
                    <p class="allergy">
                      <span>Allergy Warning: <br /></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nostrum, vitae architecto corporis voluptas corrupti dignissimos
            illo, cum inventore vel, ducimus earum cupiditate voluptate dicta?
          </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-pepper-hot"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-bread-slice"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-carrot"></i>
                  </a>
                </li>
              </ul>
            </span>
          </dd>
          <br />`
      })
      .join("")

    const menuFirst = () => {
      $(".menu .menu-appetizers div").html(appetizers)
    }

    const menuSecond = () => {
      $(".menu .menu-entrees div").html(entrees)
    }

    const menuThird = () => {
      $(".menu .menu-desserts div").html(desserts)
    }

    menuFirst()
    menuSecond()
    menuThird()
    vegetarian()
  })

  $(".menu").on("click", ".fa-exclamation-circle", function() {
    var relatedContent = $(this).next()

    if (relatedContent.is(":visible")) {
      relatedContent.slideUp(600)
      $(this)
        .find("active")
        .removeClass("active")
    } else {
      relatedContent.slideDown(600)
      $(this)
        .find(".allergy")
        .addClass("active")
    }
  })

  $(".forward").on("click", function() {
    let currentImg = $(".active")
    let nextImg = currentImg.next()
    let currentTitle = $(".act")
    let nextTitle = currentTitle.next()

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10)
      nextImg.addClass("active").css("z-index", 10)
      currentTitle.removeClass("act").css("z-index", -11)
      nextTitle.addClass("act").css("z-index", 11)
    } else {
      if (nextImg.length == 0) {
        nextImg = $("#clams")
        currentImg.removeClass("active").css("z-index", -10)
        nextImg.addClass("active").css("z-index", 10)
        nextTitle = $(".first")
        currentTitle.removeClass("act").css("z-index", -11)
        nextTitle.addClass("act").css("z-index", 11)
      }
    }
  })

  $(".back").on("click", function() {
    let currentImg = $(".active")
    let previousImg = currentImg.prev()
    let currentTitle = $(".act")
    let previousTitle = currentTitle.prev()

    if (previousImg.length) {
      currentImg.removeClass("active").css("z-index", -10)
      previousImg.addClass("active").css("z-index", 10)
      currentTitle.removeClass("act").css("z-index", -11)
      previousTitle.addClass("act").css("z-index", 11)
    } else {
      if (previousImg.length == 0) {
        previousImg = $("#cheesecake")
        currentImg.removeClass("active").css("z-index", -10)
        previousImg.addClass("active").css("z-index", 10)
        previousTitle = $(".last")
        currentTitle.removeClass("act").css("z-index", -11)
        previousTitle.addClass("act").css("z-index", 11)
      }
    }
  })
})

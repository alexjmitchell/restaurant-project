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
                    <a href="#">
                      <i class="fa fa-exclamation-circle"></i>
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
                  <a href="#">
                    <i class="fa fa-exclamation-circle"></i>
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
                  <a href="#">
                    <i class="fa fa-exclamation-circle"></i>
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
  })
})

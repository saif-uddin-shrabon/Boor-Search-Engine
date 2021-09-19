const searchBook = () => {
  const serachField = document.getElementById("search-field");
  const searchText = serachField.value;
  //   console.log(searchText);
  serachField.value = "";
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  //   console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayResult(data.docs));
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTotalSearch(data.numFound));
};

// Total search result number
const displayTotalSearch = (results) => {
  const totalSearchResult = document.getElementById("total-Search");
  totalSearchResult.innerHTML = "";
  const div = document.createElement("div");
  if (results == 0) {
    div.innerHTML = `
        <h1 class="text-center mt-5 text-warning">!-! Result Not Found Try Again !-!</h1>
        `;
  } else {
    div.innerHTML = `
    <h4 class="text-center my-5">Total Result Found :  ${results}</h4>
    `;
  }
  totalSearchResult.appendChild(div);
};

// Show Result in website
const displayResult = (docs) => {
  const searchResult = document.getElementById("search-result");

  docs.forEach((doc) => {
    // console.log(doc);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100 border border-4">
          <img src="https://covers.openlibrary.org/b/id/${
            doc.cover_i
          }-M.jpg" class="card-img-top" alt="..." />
               <div class="card-body">
                   <h5 class="card-title">Book Name: ${doc.title}</h5>
                   <h6>Author Name :  ${doc.author_name}</h6>
                   <p class="card-text"> First Publisher: ${
                     doc.first_publish_year
                       ? doc.first_publish_year
                       : " ! Not Found !"
                   }
                     <p class="card-text"> Publisher: 
                         ${doc.publisher}
                     </p>
    </div>

    `;
    searchResult.appendChild(div);
  });
};

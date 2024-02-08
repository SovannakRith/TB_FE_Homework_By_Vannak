async function fetchAPI() {
    const loader = document.getElementById("loader");
    loader.style.display = "block";
  
    const url = "https://qqknevh7guimnafkkwce5ajl6a0rrjxb.lambda-url.us-east-1.on.aws/";
    const res = await fetch(url);
    const jsonFomart = await res.json();
  
    const getData = jsonFomart.data.result.entities;
    let dataTable = "";
  
    getData.forEach((element, index) => {
      dataTable += `
         <tr>
              <td>${index += 1}</td>
              <td>${element.id}</td>
              <td>${element.title}</td>
              <td>${element.cases_count}</td>
              <td>${element.description}</td>
              <td>${element.created_at}</td>
          </tr>
         `;
    });
  
    document.getElementById("tbody").innerHTML = dataTable;
    loader.style.display = "none";
  }
  
  fetchAPI();
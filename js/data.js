// data load part 
const loadPhTubeData = () =>{
    const url="https://openapi.programming-hero.com/api/videos/category/1000"
  fetch (url)
  .then((res)=>res.json())
  .then((data)=>{
      const courseData=data.data;
      displayPhTubeData(courseData);

       // Add event listeners to the category buttons
       const allButton = document.querySelector("#all-button");
       const musicButton = document.querySelector("#music-button");
       const comedyButton = document.querySelector("#comedy-button");
       const drawingButton = document.querySelector("#drawing-button");



       allButton.addEventListener("click", () => filterCourses(courseData, "1000"));
      musicButton.addEventListener("click", () => filterCourses(courseData, "1001"));
      comedyButton.addEventListener("click", () => filterCourses(courseData, "1003"));
      drawingButton.addEventListener("click", () => filterCourses(courseData, "1005"));


  })
}





// const loadPhTubeData = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
//     const data = await res.json();
//     const phTube = data.data;
//     displayPhTubeData(phTube);


// }
loadPhTubeData();

//display load data 
const displayPhTubeData = (courses) => {
    // console.log(courses);

    // get result container 
    const resultContainer = document.getElementById('result-container');

    courses.forEach(course => {
        console.log(course);

        // create element 
        const phTubeCard = document.createElement('div');
        phTubeCard.classList = `card p-4 bg-white-200 shadow-xl`;
        
        // if(course.authors[0].verified==true){
        //     <p><img class="" src="./images/fi_10629607.svg" alt=""></p>
        //   }

        // inner html set 
        phTubeCard.innerHTML = `
        <figure><img class="w-full h-[200px]" src="${course.thumbnail}" /></figure>
                    <div class="card-body">
                      <div class="flex gap-3">
                      <img class="w-[40px] h-[40px] rounded-full" src="${course.authors[0].profile_picture}" alt="">
                      <h2 class="card-title text-xl font-bold ">${course.title}</h2>
                      </div>
                      <div class="flex">
                      <p class="text-[#5D5D5D]">${course.authors[0].profile_name}</p>
                      <p>${course.authors[0].verified?`<img class="" src="./images/fi_10629607.svg" alt="">`:''}</p>
                      </div>
                      <p class="">${course.others.views} <span>views</span></p>
                      
                    </div>
        `;

        //append child
        resultContainer.appendChild(phTubeCard);

    })
}

const filterCourses = (courses, category_id) => {
    console.log("Selected category:", category_id);
  
    const courseContainer = document.getElementById("result-container");
  
    // Clear the current card container
    courseContainer.innerHTML = "";
  
    // Filter cards based on the selected category
    const filteredCourses = category_id === "1000" ? courses : courses.filter((course) => course.category_id === category_id);
  
    console.log("Filtered courses:", filteredCourses.length);
  
  
    // Display the filtered cards
    displayPhTubeData(filteredCourses);
  };
  

// new html page link up 
const newHtmlPageOpen = ()=>{
    window.location.href = 'blog.html';
}


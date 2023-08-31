// data load part 
const loadPhTubeData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const phTube = data.data;
    displayPhTubeData(phTube);

}
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
                      <p class="text-[#5D5D5D]">${course.authors[0].profile_name}</p>
                      
                      <p class="">${course.others.views} <span>views</span></p>
                      
                    </div>
        `;

        //append child
        resultContainer.appendChild(phTubeCard);

    })
}

const newHtmlPageOpen = ()=>{
    window.location.href = 'blog.html';
}


window.onload = function () {

    var resultScore = 0;
    
    function formHandler() {
        console.log('form handler')

        // get all selected/typed answers
        var allAnswers = []

        var q1 = document.querySelector('input[name="question-1-answers"]')
        var q2 = document.querySelector('input[name="question-2-answers"]:checked');
        var q31 = document.querySelector('input#question-3-answers-Feet');
        var q32 = document.querySelector('input#question-3-answers-Inches');
        var q4 = document.querySelector('input[name="question-4-answers"]');
        var q5 = document.querySelector('input[name="question-5-answers"]:checked');
        var q6 = document.querySelector('input[name="question-6-answers"]:checked');

        allAnswers.push(q1,q2,q31,q32,q4,q5,q6);

        // get values from tag refernce ^
        var values = []
        allAnswers.forEach(answer => {
            values.push(answer.value)
        });

        console.log('values', values)

        // age
        if ( values[0] >= 50) resultScore++;

        // BMI
        var heightInches = values[2] * 12 
        var inch = heightInches += +values[3]
        var bmi = calculateBMI(values[4], inch )

        if( bmi > 30 ){
            resultScore += 2
        }else if ( bmi > 27.5 ){
            resultScore++
        } 

        // smoker
        if (values[5] == 'Former') resultScore++
        if (values[5] == 'Current') resultScore += 2

        // family cancer
        if (values[6] == 'Yes') resultScore++

        //  ======= UPDATE DISPLAY ========
        let textToShow;
        if (resultScore >1) textToShow = `<p> You may benefit from cancer screening with a multi cancer screening test </p>`;
        if (resultScore <=1) textToShow = `<p> based on the info you provided, you are not at high risk for developing cancer but cancer screenings as recommended by your physician should still be performed. </p>`;

        var body = document.querySelector('body')
        var section = document.createElement('section')

        section.innerHTML = `

            <nav>
                <h1> Results </h1>
            </nav>
            <br>
            <br>
            
            <p> A paragraph explains about how the results are calculated and references a study publication by the American Cancer Society. </p>
            <br>
            <br>
            
            <p> ${ textToShow } </p>

            <br>
            <br>
            
            <button onclick="location.href='https://onetestforcancer.com/'" type="button">
                visit onetestforcancer.com
            </button>

            <br>
            <br>

            <table>
                <tr>
                    <th> Age </th>
                    <td> ${ values[0] } </td>
                </tr>
                <tr>
                    <th> Gender </th>
                    <td> ${ values[1] } </td>
                </tr>
                <tr>
                    <th> Height </th>
                    <td> ${ values[2] }' ${ values[3] }" </td>
                </tr>
                <tr>
                    <th> Weight </th>
                    <td> ${ values[4] } </td>
                </tr>
                <tr>
                    <th> Bmi </th>
                    <td> ${ bmi.toFixed(2) } </td>
                </tr>
                <tr>
                    <th> Smoking History </th>
                    <td> ${ values[5] } </td>
                </tr>
                <tr>
                    <th> Cancer History </th>
                    <td> ${ values[6] } </td>
                </tr>
                <tr>
                    <th> Risk Result Score </th>
                    <td> ${ resultScore } </td>
                </tr>
                
                
            </table>



        
        `;

        body.appendChild(section)
        body.style = `
            color: black;
            text-align: center;
            background-color: white;

        `

        console.log(tableToJson(document.getElementsByTagName('table')[0]))
        
    }

    document.getElementById('submitBtn').addEventListener('click', () => {
        formHandler()
    })

    function calculateBMI(weight, height) {

        let bmi = 703 * weight / (height** 2)

        return bmi
    }


    // ================
    //   carosel
    // ================
    

    //  get references to buttons and list items
    var next = document.getElementById("next")
    var allOkBtns = document.querySelectorAll("button.next")
    var submit = document.getElementById("submitBtn")
    var allLis = document.getElementsByTagName("li");
    
    var currentPage = 0;  
    var pages = 7;
    var itemsPerPage = 1;
    
    submit.style.display = 'none'; // clear when survey starts
    
    var liArr = Array.prototype.slice.call(allLis); // convert node list to an array
    // position all questions at the bottom of the page out of view
    liArr.forEach(li => {
        li.classList.add('waiting')
        li.classList.add('animated')
    });

    function nextHandler() {  

        // progress on each click
        document.getElementsByTagName('progress')[0].value += 10;
        
        // hide start page content
        next.style.display = 'none'; 
        document.getElementById('startmsg').style.display = 'none';
        document.getElementById('startmsg2').style.display = 'none';
 
        // aniate next question
        for(i = 1; i <= itemsPerPage; i++) {
            var oldLi = document.querySelector("li:nth-child(" + (currentPage * itemsPerPage) + ")")

            // hide current
            if( oldLi ){
                oldLi.classList.remove('active')
                oldLi.classList.add('slideOutUp')
                
                setTimeout(() => {
                    oldLi.style.display = 'none';
                    oldLi.classList.remove('slideOutUp')
                }, 1000);
            }

            // show next
            var nextLi = document.querySelector("li:nth-child(" + ((currentPage * itemsPerPage) + i) + ")")
            nextLi.classList.remove('slideOutUp')
            nextLi.classList.remove('waiting')
            nextLi.classList.add('active')
        }

        // if last page show submit button
        if(currentPage == pages - 1) {
            submit.style.display = 'block';
        }  else {
            submit.style.display = 'none';
        }

        // show next page or loop
        if(currentPage < pages - 1) {
            currentPage += 1;
        } else {
            next.style.display = 'none'
            // currentPage = 0;
        }
        
    }

    // event listeners / onclick actions
    next.addEventListener('click', () => {
        nextHandler()
    })

    var okBtns = Array.prototype.slice.call(allOkBtns);
    okBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            nextHandler()
        })
    })

    submit.addEventListener('click', () => {
        document.getElementById('wrapper').style.display = 'none';
        document.getElementById('progress').style.display = 'none';
    })
    

    function tableToJson(table) { 
        var data = [];
        for (var i=1; i<table.rows.length; i++) { 
            var tableRow = table.rows[i]; 
            var rowData = []; 
            for (var j=0; j<tableRow.cells.length; j++) { 
                rowData.push(tableRow.cells[j].innerHTML);; 
            } 
            data.push(rowData); 
        } 

        // fs.writeFile('results.json', data); // << send to database
        return data; 
    }

}


let personData = [];

let jsDOM = {
    data: {
        fname: document.getElementById('fNameInput'),
        lname: document.getElementById('lNameInput'),
        email: document.getElementById('emailInput'),
        phone: document.getElementById('phoneInput'),
        city: document.getElementById('cityInput'),
        message: document.getElementById('messageInput')
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
}

let jsFunc = {
    showData: () => {
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';

        let node = document.createElement("div");
        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);

        let fullname, email, message;

        personData.forEach(x => {
            fullname = `${x.firstname} ${x.lastname}`, phone = x.phone, city = x.city, email = x.email, message = x.message;
            let personData = document.createElement('p');
            let personDataText = document.createTextNode(`Name: ${fullname}, Email:${email}, Phone:${phone}, City:${city}, Message:${message}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
        })
        parentDiv.appendChild(node);
    },
    clearFields: () => {
        jsDOM.data.fname.value = "";
        jsDOM.data.lname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.phone.value = "";
        jsDOM.data.city.value = "";
        jsDOM.data.message.value = "";
    },

    addData: () => {
        if ((document.getElementById('fNameInput').value === "" || document.getElementById('lNameInput').value === "" || document.getElementById('emailInput').value === ""
            || document.getElementById('phoneInput').value === ""|| document.getElementById('cityInput').value === "" || document.getElementById('messageInput').value === "")) {
            alert("Please enter data to the required fields (*) ");
        } else {
            personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value, phone: jsDOM.data.phone.value, city: jsDOM.data.city.value, message: jsDOM.data.message.value });
            jsFunc.clearFields();
        }
    }
}

jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);

//|| document.getElementById('emailInput').value === ""
//\u00a0\
//personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value, message: jsDOM.data.message.value });
//jsFunc.clearFields();
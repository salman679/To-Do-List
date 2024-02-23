let addBtn = document.getElementById('btn');
let totalData = [];

addBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let activeFormData = {};
    let formData = new FormData(document.getElementById('form-area'));

    formData.forEach((value, property) => {
        activeFormData[property] = value;
    })

    totalData.push({
        ...activeFormData,
        id: totalData.length + 1
    })

    document.getElementById('form-area').reset();
    itemsHandler();

    totalData = [];
})

// liStructure function
function liStructure(item) {
    return `<li class="li-items ${item.status}">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </li>`
}

// itemsHandler 
function itemsHandler() {

    let filterStructure = [
        {
            status: 'complete',
            ulElement: document.getElementById('ulItem'),
            liElements: [],
            totalSpan: document.getElementById('totalComplete')
        },
        {
            status: 'running',
            ulElement: document.getElementById('ulItem'),
            liElements: [],
            totalSpan: document.getElementById('totalRunning')
        },
        {
            status: 'cancel',
            ulElement: document.getElementById('ulItem'),
            liElements: [],
            totalSpan: document.getElementById('totalCancel')
        },
        {
            status: 'upcoming',
            ulElement: document.getElementById('ulItem'),
            liElements: [],
            totalSpan: document.getElementById('totalUpcoming')
        },
    ]

    // filterStructure.forEach(final => {
    //     const liElements = final.ulElement.querySelectorAll('li');
    //     liElements.forEach(liElement => {
    //         liElement.remove()
    //     })
    // });

    // totalData.map(itemData => {
    //     filterStructure.map(filter => {
    //         if (itemData.status == filter.status) {
    //             filter.ulElement.innerHTML += liStructure(itemData)
    //         }
    //     })
    // })

    totalData.map(itemData => {
        filterStructure.map(filter => {
            if (itemData.status == filter.status) {
                filter.liElements.push(liStructure(itemData));
            }
            filter.totalSpan.innerHTML = filter.liElements.length;
        })
    })

    filterStructure.forEach(item => {
        item.ulElement.innerHTML += item.liElements.join('');
    })
}
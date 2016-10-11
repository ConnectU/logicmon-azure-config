(function (window, document) {

    var layout = document.getElementById('layout'),
        menu = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    var menuconstants = {
        sectionTemplate: '.section-template',
        contentContainer: '#wrapper',
        startSection: '#virtual-machine-tab'
    };

    init()

    function init() {
        importSectionsToDOM();
        setMenuOnClickEvent();
        hideAllSections();
        showSection(menuconstants.startSection);
    };

    function toggleClass(element, className) {

        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    };

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

    function importSectionsToDOM(){
        const links = document.querySelectorAll('link[rel="import"]')
        for (i = 0; i < links.length; i++) {
            let template = links[i].import.querySelector(menuconstants.sectionTemplate)
            let clone = document.importNode(template.content, true)
            document.querySelector(menuconstants.contentContainer).appendChild(clone)
        };
    }

    function setMenuOnClickEvent() {
        document.body.addEventListener('click', function (event) {
            if (event.target.dataset.section) {
                hideAllSections()
                showSectionEvent(event)
            }
        })
    };

    function showSectionEvent(event) {
        showSection('#' + event.target.dataset.section)
    };

    function showSection(sectionId) {
        const node = document.querySelector(sectionId)
        node.style.display = 'block';
        node.parentNode.style.display = 'block';
        if(node.querySelector('section')){
            node.querySelector('section').style.display = 'block';
        }
    };

    function hideAllSections() {
        var sections = document.querySelectorAll(menuconstants.contentContainer + ' section')
        for (i = 0; i < sections.length; i++) {
            sections[i].style.display = "none";
        }
    };

} (this, this.document));

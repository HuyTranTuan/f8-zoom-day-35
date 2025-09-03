function Link({ id, label, currentPage, setCurrentPage }) {
    const isActive = currentPage === id;

    const handleClick = (e) => {
        setCurrentPage(id);
        clearActiveLink();
        e.target.classList.add("active");
    };
    const clearActiveLink = function () {
        const linkList = document.querySelectorAll(".page-navigation-item");
        linkList.forEach(link => {
            link.classList.remove("active");
        })
    }

    return (
        <li
            className={`page-navigation-item ${isActive ? 'active' : ''}`}
            onClick={handleClick}
            title={`Navigate to ${label}`}
        >
            {label}
        </li>
    );
}

export default Link;
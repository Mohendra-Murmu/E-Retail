import Bottom_nav from "./Bottom_nav"
import Header_contact from "./Header_contact"
import Header_main from "./Header_main"

function Header() {
    return (
        <header>
            {/** top Contact/discount header */}
            <div>
                <Header_contact />
            </div>
            <div>
                <Header_main />
            </div>
            <div>
                <Bottom_nav />
            </div>
        </header>
    )
}

export default Header

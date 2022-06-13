function Whatsapp(props) {
    return (
        <a 
            href="https://api.whatsapp.com/send?phone=573160178451&text=Hola! 
            Quisiera mas información sobre... "
            className="whatsapp__float" 
            target="_blank"
        >
            <i 
                class="fa fa-whatsapp my-float"
            >
            </i>
        </a>
    );
}

export default Whatsapp;
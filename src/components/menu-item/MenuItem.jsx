const MenuItem =({styles, size, alignment, title, imageUrl}) => {
    return (
        <div class= {`column ${size} ${alignment}`}>

            <div class="card" style={{backgroundImage: `url(${imageUrl})`}}>
                <div class="card-content">
                    <div class="content">
                        <div class="title">{title}</div>
                        <div class="subtitle">SHOP NOW</div>
                    </div>
                </div>
            </div>

        </div> 
    )
}

export default MenuItem;
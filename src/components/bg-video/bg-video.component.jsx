

const BgVideo =()=>{

    return (
        <div className="bg-video ">
            <video className="bg-video__content" autoPlay muted loop >
                <source src="video/space1.mp4" type="video/mp4" />
                Your browser is not supported!
            </video>
        </div>
    )

}

export default BgVideo;
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img
                    src={
                        "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    }
                    alt={"image2"}
                />
            </div>
            <div className={s.profileInfo}>Ava + desc</div>
        </div> );
}

export default ProfileInfo;
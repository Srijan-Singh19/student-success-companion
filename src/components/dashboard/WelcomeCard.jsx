export default function WelcomeCard() {

    const today = new Date();

    const date = today.toLocaleDateString("en-IN",{
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    });

    return(

        <div className="welcome-card">

            <div>

                <h1> Welcome Back, Srijan</h1>

                <p>{date}</p>

                <span>
                    Let's have a productive day
                </span>

            </div>

        </div>

    );

}
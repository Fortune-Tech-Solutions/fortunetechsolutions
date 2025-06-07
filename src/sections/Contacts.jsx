import EmailForm from "../components/EmailForm";

const Contacts = () => {
    return (
        <div className="flex justify-center items-center max-w-7xl mx-auto">
            <div className="border border-base-content/75 rounded grid grid-cols-1 md:grid-cols-2 w-full mx-2">

                <div className="flex flex-col justify-center items-center p-8">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-bold mb-4 max-w-lg">Let&apos;s talk about your project&apos;s needs.</h2>
                        <p>
                            For more information, please send us a message.
                            Our team will get back to you as soon as possible.
                        </p>
                        <span></span>
                        <div className="divider">OR</div>
                        <p className="text-center">You can contact us directly.</p>
                        <p className="font-bold flex items-center justify-center mt-2">(703) 501-1716
                        </p>
                        <p className="font-bold flex items-center justify-center">support@fortunehomesteam.com
                        </p>

                    </div>
                </div>

                <div id="emailForm" className="flex justify-center border-t md:border-t-0 border-l-0 md:border-l border-base-content/75 py-8">
                    <EmailForm />
                </div>
            </div>
        </div>
    );
}

export default Contacts;

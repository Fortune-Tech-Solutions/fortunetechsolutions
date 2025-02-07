import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion"
import Modal from "./Modal";

const EmailForm = () => {

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    const [formData, setFormData] = useState({
        from_email: { value: "", isValid: true, errorMessage: "" },
        message: { value: "", isValid: true, errorMessage: "" },
    });

    const [isLoading, setIsLoading] = useState(false);

    const [submissionState, setSubmissionState] = useState({
        state: false,
        success: false,
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: { ...prev[name], value, isValid: true, errorMessage: "" }
        }))
    }

    const sendForm = (e) => {
        e.preventDefault();

        const templateParams = {
            from_email: formData.from_email.value,
            message: formData.message.value,
        }

        let isValid = true;

        if (!formData.from_email.value) {
            setFormData(prev => ({
                ...prev,
                from_email: { ...prev.from_email, isValid: false, errorMessage: "This field shouldn't be empty." }
            }))
            isValid = false;
        } else if (!emailRegex.test(formData.from_email.value)) {
            setFormData((prev) => ({
                ...prev,
                from_email: { ...prev.from_email, isValid: false, errorMessage: "Invalid email format." }
            }))
            isValid = false;
        }

        if (!formData.message.value) {
            setFormData(prev => ({
                ...prev,
                message: { ...prev.message, isValid: false, errorMessage: "This field shouldn't be empty." }
            }))
            isValid = false;
        } else if (formData.message.value.length < 2) {
            setFormData(prev => ({
                ...prev,
                message: { ...prev.message, isValid: false, errorMessage: "Enter atleast 2 characters." }
            }))
            isValid = false;
        }

        if (!isValid) return;

        setIsLoading(true)
        emailjs.send('service_8zzqrkd', 'template_hpkokfj', templateParams).then(
            (response) => {

                if (response) {
                    setFormData({
                        from_email: { value: "", isValid: true, errorMessage: "" },
                        message: { value: "", isValid: true, errorMessage: "" },
                    })

                    setIsLoading(false)
                    setSubmissionState({ ...submissionState, state: true, success: true })

                    setTimeout(() => {
                        setSubmissionState({ ...submissionState, state: false });
                    }, 2000);
                }

            },
            // error
            () => {

                setIsLoading(false)
                setSubmissionState({ ...submissionState, state: true, success: false })

                setTimeout(() => {
                    setSubmissionState({ ...submissionState, state: false });
                }, 2000);
            },
        );
    }

    useEffect(() => {
        emailjs.init({
            publicKey: '1EyTY6eLSshat_knt',
            // Do not allow headless browsers
            blockHeadless: true,
            blockList: {
                // Block the suspended emails
                list: ['foo@emailjs.com', 'bar@emailjs.com'],
                // The variable contains the email address
                watchVariable: 'userEmail',
            },
            limitRate: {
                // Set the limit rate for the application
                id: 'app',
                // Allow 1 request per 10s
                throttle: 10000,
            },
        });
    }, []);


    return (
        <form className="rounded justify-center p-8 w-full max-w-lg">

            {
                submissionState.state ? (
                    submissionState.success ?
                        <div className="toast toast-center toast-middle">
                            <div className="alert alert-success rounded">
                                <span>Message sent successfully.</span>
                            </div>
                        </div>
                        :
                        <div className="toast toast-center toast-middle">
                            <div className="alert alert-error rounded text-base-content">
                                <span>Something went wrong. Please try again later.</span>
                            </div>
                        </div>
                ) : null
            }


            <div className="space-y-4">
                <div className="form-control">
                    <label className="label" htmlFor="from_email">Email</label>
                    <div className={`transition duration-0 tooltip tooltip-error tooltip-open ${formData.from_email.isValid ? "opacity-0" : "opacity-100"}`} data-tip={formData.from_email.errorMessage} />
                    <input type="email" name="from_email" value={formData.from_email.value} onChange={handleFormChange}
                        className={`input ${!formData.from_email.isValid ? "border-error" : "border-base-content/75"} rounded w-full max-w-lg`}
                        placeholder="Type your email here"
                    />
                </div>

                <div className="form-control">
                    <label className="label" htmlFor="message">How can we help?</label>
                    <div className={`transition duration-0 tooltip tooltip-error tooltip-open ${formData.message.isValid ? "opacity-0" : "opacity-100"}`} data-tip={formData.message.errorMessage} />
                    <textarea name="message" value={formData.message.value} onChange={handleFormChange}
                        className={`textarea ${!formData.message.isValid ? "border-error" : "border-base-content/75"} text-base rounded w-full max-w-lg`} rows={8}
                        placeholder="Type your email here"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-between items-center space-x-4">
                <div className="text-sm text-base-content/50">By clicking &quot;Contact Us&quot;, I acknowledge I have read and understand the <span className="text-base-content">

                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className="hover:underline hover:cursor-pointer">Privacy Notice</label>
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <Modal
                        title="PRIVACY POLICY"
                        content={
                            <div className="space-y-4">
                                <p>Last updated February, 2025</p>
                                <p className="text-base-content/90">We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you fill out the email form on our website.</p>

                                <div>
                                    <h2 className="font-bold">1. INFORMATION WE COLLECT</h2>
                                    <div className="pl-3 text-base-content/90">
                                        <p>When you fill out the email form on our website, we may collect the following personal information:</p>
                                        <ul className="list-disc list-inside">
                                            <li>Your name</li>
                                            <li>Your email address</li>
                                            <li>Any additional information you choose to provide</li>
                                        </ul>
                                    </div>
                                </div>


                                <div>
                                    <h2 className="font-bold">2. HOW WE USE YOUR INFORMATION</h2>
                                    <div className="pl-3 text-base-content/90">
                                        <p>We use the information we collect for the following purposes:</p>
                                        <ul className="list-disc list-inside">
                                            <li>To respond to your inquiries and provide you with requested information</li>
                                            <li>To send you updates, newsletters, and other communications related to our services, if you have opted in</li>
                                            <li>To improve our website and services</li>
                                            <li>To comply with legal obligations and protect our legal rights</li>
                                        </ul>
                                    </div>
                                </div>


                                <div>
                                    <h2 className="font-bold">3. HOW WE DISCLOSE YOUR INFORMATION</h2>
                                    <div className="pl-3 text-base-content/90">
                                        <p>We do not sell, trade, or otherwise transfer your personal information to outside parties, except as described below:</p>
                                        <ul className="list-disc list-inside">
                                            <li>We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our users.</li>
                                            <li>We may disclose your information if required by law or in response to valid legal requests.</li>
                                        </ul>
                                    </div>
                                </div>


                                <div>
                                    <h2 className="font-bold">4. HOW WE PROTECT YOUR INFORMATION</h2>
                                    <div className="pl-3 text-base-content/90">
                                        <p>We implement reasonable security measures to protect the personal information we collect. However, no security measures are perfect, and we cannot guarantee complete security.</p>
                                    </div>

                                </div>

                                <div>
                                    <h2 className="font-bold">5. YOUR RIGHTS</h2>
                                    <div className="pl-3 text-base-content/90">
                                        <p>You have the following rights concerning your personal information:</p>
                                        <ul className="list-disc list-inside">
                                            <li>The right to access and receive a copy of your personal information</li>
                                            <li>The right to correct any inaccurate or incomplete information</li>
                                            <li>The right to request the deletion of your personal information</li>
                                            <li>The right to object to the processing of your personal information</li>
                                            <li>The right to withdraw your consent at any time</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="font-bold">6. CHANGES TO THIS PRIVACY POLICY</h2>
                                    <div className="pl-3 text-base-content/90">
                                        <p>We may update this Privacy Policy from time to time. When we do, we will post the revised policy on this page with the updated effective date.</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="font-bold">7. CONTACT</h2>
                                    <div className="pl-3 text-base-content/90">
                                        <p>If you have any questions or concerns about this Privacy Policy, please contact us through our <span className="font-bold">Contact</span> section.</p>
                                    </div>
                                </div>

                            </div>
                        }
                        action={
                            <label htmlFor="my_modal_6" className="btn btn-primary rounded">Close</label>
                        }
                    />

                </span>.</div>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`btn btn-secondary text-primary rounded px-8 ${isLoading ? "btn-disabled" : ""}`} onClick={sendForm}>
                    {
                        isLoading ?
                            <span className="loading loading-dots loading-sm" /> :
                            "Contact Us"
                    }
                </motion.button>
            </div>
        </form>
    );
}

export default EmailForm;

import {useRef, useState} from "react";
import {FaCircleArrowLeft} from 'react-icons/fa6';
import BgSignup from '../../Assets/signup_back.jpg';
import Logo from '../../Assets/logo.png';
import InputText from '../../Components/Common/InputText';
import ProfilePictureUploader from '../../Components/Common/ProfilePictureUploader';
import RegisterSuccess from '../../Components/PropertyOwner/RegisterSuccess';
import axios from '../../api/axios';

const REGISTER_URL = '/api/v1/auth/register';
const Signup = () => {
    const errRef = useRef();

    const [success, setSuccess] = useState(false);

    const [errMessage, setErrMessage] = useState("");

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        address: "",
        district: "",
        email: "",
        phone: "",
        nic: "",
        gender: "",
        password: "",
        confirmPassword: "",
        profilePic: "",
    });



    const inputs = [
        // Properties for First Name input field
        {
            id: 1,
            name: 'firstName',
            type: 'text',
            errorMessage: "First name should not contain special characters and numbers",
            label: 'First Name',
            pattern: "^[A-Za-z]+$",
            required: true,
        },
        // Properties for Last Name input field
        {
            id: 2,
            name: 'lastName',
            type: 'text',
            errorMessage: "Last name should not contain special characters and numbers",
            label: 'Last Name',
            pattern: "^[A-Za-z]+$",
        },
        // Properties for Address input field
        {
            id: 3,
            name: 'address',
            type: 'text',
            errorMessage: "",
            label: 'Address',
            required: true,
        },
        // Properties for District input field
        {
            id: 4,
            name: 'district',
            type: 'text',
            errorMessage: "District should not contain any number or any special character",
            label: 'District',
            pattern: "^[A-Za-z]+$",
            required: true
        },
        // Properties for Email input field
        {
            id: 5,
            name: 'email',
            type: 'email',
            errorMessage: "Email is not valid",
            label: 'Email',
            pattern: '^[a-zA-Z0-9_\.]+@(?:[a-zA-Z0-9_])+[\.][[\.]A-Za-z]+$',
            required: true
        },
        // Properties for Phone Number input field
        {
            id: 6,
            name: 'phone',
            type: 'text',
            errorMessage: "Invalid phone number",
            label: 'Phone Number',
            pattern: '^[0-9]{10,11}',
            required: true
        },
        // Properties for NIC input field
        {
            id: 7,
            name: 'nic',
            type: 'text',
            errorMessage: "Invalid NIC",
            label: 'NIC',
            pattern: '^[0-9]{9}([0-9]{3}|v|V)',
            required: true
        },
        // Properties for Gender input field
        {
            id: 8,
            name: 'gender',
            label: 'Gender'
        },
        // Properties for Password input field
        {
            id: 9,
            name: 'password',
            type: 'password',
            errorMessage: "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character from the list (!@#$%^&*)",
            label: 'Password',
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$',
            required: true
        },
        // Properties for Confirm Password input field
        {
            id: 10,
            name: 'confirmPassword',
            type: 'password',
            errorMessage: "Passwords do not match",
            label: 'Confirm Password',
            pattern: values.password,
            required: true
        },
        // Properties for Profile Picture input field
        {
            id: 11,
            name: 'profilePic',
            errorMessage: "Should upload an image",
            label: 'Upload Your Profile Picture',
            required: true
        },
    ]





    // Function for handling submit of the form
    const handleSubmit = async (e) => {
        e.preventDefault();


        if (values.password !== values.confirmPassword) {
            setErrMessage("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/register",
                JSON.stringify(
                    {
                        firstname: values.firstName,
                        lastname: values.lastName,
                        email: values.email,
                        password: values.password,
                        role: "PROPERTYOWNER",
                        propertyOwner: {
                            firstname: values.firstName,
                            lastname: values.lastName,
                            address: values.address,
                            nic: values.nic,
                            telephone: values.phone,
                            district: values.district,
                            }
                        }
                        ),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true

                }
            );
           

            console.log(response?.data);
            console.log(response?.access_token);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            const resetValues = () => {
                setValues({
                    firstName: "",
                    lastName: "",
                    address: "",
                    district: "",
                    email: "",
                    phone: "",
                    nic: "",
                    gender: "",
                    password: "",
                    confirmPassword: "",
                    profilePic: "",
                });
            };
            resetValues();
        } catch (err) {

            console.log(JSON.stringify(err))

            if (!err?.response) {
                setErrMessage('No Server Response');
            } else if (err.response?.status === 500) {
                setErrMessage(err.response.data.errorMessage);
            } else {
                setErrMessage('Something went wrong');
            }
            errRef.current.focus();

        }


    };

    // Function for handling value changes of input fields
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    console.log(values);
    return (

        <div className='w-full h-screen'>

            {/* Navbar */}
            <div className='fixed w-full h-fit p-3 bg-[#2e8a99] z-10'>
                <FaCircleArrowLeft className='w-8 h-8 fill-white cursor-pointer hover:fill-slate-200 transition duration-200' />
            </div>

            {/* Background image */}
            <img src={BgSignup} className='fixed w-full h-screen object-cover -z-10'  />

            {/* Main div */}
            <div className='div-main w-full min-h-screen h-fit bg-slate-950/60 p-10 pt-24 flex justify-center items-center'>
                {success ?
                    <RegisterSuccess /> 
                : (
                    <div className='form-container w-full max-w-[800px] h-fit bg-white p-10 rounded-lg border-8'>
                        <img src={Logo} alt='Logo' className='w-24 h-24 mx-auto' />
                        <h1 className='form-title text-4xl font-bold text-[#2e8a99] w-fit mx-auto my-10 text-center'>PROPERTY OWNER REGISTRATION</h1>

                        {/*Error message*/}
                        <div ref={errRef} className={errMessage === "" ? "hidden": "my-4 bg-red-100 text-center border border-red-400 text-red-700 px-4 py-3 rounded relative"}
                             role="alert">
                            <strong className="font-bold">Registration Failed!</strong>
                            <span className="block sm:inline"> {errMessage} </span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                        </div>

                        {/* Property Owner Registration Form */}
                        <form className='w-full flex flex-wrap gap-5' onSubmit={handleSubmit}>
                            {/* Mapping inputs */}
                            {inputs.map((input) => (
                                <div className='flex-auto w-64'>

                                    {/* If the input type is 'text', 'password' or 'email' */}
                                    {(input.type === 'text') || (input.type === 'password') || (input.type === 'email') ? (
                                        // Component for input types 'text', 'password' and 'email'
                                        <InputText key={input.id} {...input} value={values[input.name]} onChange={onChange} /> 
                                    ) : (input.name === 'gender') ? (
                                        <div className='w-full min-w-[200px]'>
                                            <label>Gender</label>
                                            <div className='flex justify-around items-center gap-3 text-[#8c8c8c]'>
                                                {/* For female */}
                                                <span className='flex items-center'>
                                                    <input type='radio' className='mr-1' name='gender' id='gender-female' value='Female' defaultChecked onChange={onChange} />
                                                    Female
                                                </span>
                                                {/* For male */}
                                                <span className='flex items-center'>
                                                    <input type='radio' className='mr-1' name='gender' id='gender-male' value='Male' onChange={onChange} />
                                                    Male
                                                </span>
                                            </div>
                                        </div>
                                    ) : (input.name === 'profilePic') ? (
                                        // Component for single-image upload
                                        <ProfilePictureUploader key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                                    ) : (
                                        <div></div>
                                    )}
                                    
                                </div>
                            ))}                                              
                            
                            <div className='w-full flex justify-center items-center mt-3 p-2'>
                                {/* Checkbox for agreeing for the terms and conditions */}
                                <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 accent-[#1f6e8c]/50 bg-gray-100 border-gray-300 rounded focus:ring-[#1f6e8c]/50 dark:focus:ring-[#1f6e8c]/60 dark:ring-offset-[#1f6e8c]/80 focus:ring-2 dark:bg-[#1f6e8c]/70 dark:border-[#1f6e8c]/60" required />
                                <label htmlFor="link-checkbox" className="ml-2">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 underline">terms and conditions</a>.</label>
                            </div>

                            <div className='w-full flex justify-center my-6'>
                                {/* Button for form submit (Register) */}
                                <button className='border p-4 w-full text-lg text-white bg-[#1f6e8c] rounded-lg hover:bg-[#1f4b61]'>Register</button>
                            </div>

                            <div className='flex justify-center text-md mx-auto'>
                                Already have an account? <span className='ml-2 text-blue-700 underline'>Signin</span> 
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Signup

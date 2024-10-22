import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { MdOutlineCameraAlt } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ProfileView from './ProfileView';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  ChangeProfilePicture,
  DeleteProfilePicture,
} from '../../../utils/userApiCall';
import { setAuthUser } from '../../../Redux/features/user/userSlice';
const ProfilePicture = ({ authUser }) => {
  const [profileView, setProfileView] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [removePhotoLoading, setRemovePhotoLoading] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const userPicture = useSelector((state) => state.user.authUser);
  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
      //   console.log(file);
    }
  };

  const handleProfileView = (data) => {
    setProfileView(data);
  };
  const handleImageCancel = () => {
    setPreview(null);
    setProfilePic(null);
  };
  // ------------------ Remove Profile Picture ---------------
  const handleRemovePhoto = async () => {
    if (authUser.profilePic.length) {
      setRemovePhotoLoading(true);
      const res = await DeleteProfilePicture();
      setRemovePhotoLoading(false);
      // console.log(res);
      const newData = { ...authUser };
      if (res.status == 'error') {
        toast.error(res.data, {
          position: 'top-center',
        });
      } else {
        newData.profilePic = '';
        dispatch(setAuthUser(newData));
        toast.success('Profile Picture Removed Successfully', {
          position: 'top-center',
        });
      }
    }
  };

  // ------------- Change Profile Picture ------------
  const handleProfilePictureSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('profilePic', profilePic);
    setLoading(true);
    const newData = { ...authUser };

    const res = await ChangeProfilePicture(formData);
    setLoading(false);
    // console.log('res', res);
    if (res.status === 'error') {
      toast.error(res.data, {
        position: 'top-center',
      });
    } else {
      newData.profilePic = res.data.data.profilePic;
      dispatch(setAuthUser(newData));
      toast.success('Profile Picture Change Successfully', {
        position: 'top-center',
      });
    }
    setPreview(null);
    setProfilePic(null);
  };

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="sw-[60%] sh-[60%] w-48 h-48 my-10 rounded-full relative shadow shadow-gray-700 outline outline-2 outline-blue-600">
          <div
            className="w-full h-full rounded-full "
            style={{
              backgroundImage: `url(${authUser?.profilePic || './images/default_profile.png'})`,
              backgroundSize: 'cover', // Cover the entire container
              backgroundPosition: 'center', // Center the image
              backgroundRepeat: 'no-repeat', // Prevent tiling
            }}
            onClick={() => handleProfileView(true)}
          ></div>
          {/* <img
            src={authUser?.profilePic || './images/default_profile.png'}
            alt="profile"
            className="w-full h-full rounded-full "
            onClick={() => handleProfileView(true)}
          /> */}
          {/* The button to open modal */}
          <label
            htmlFor="my_modal_7"
            className={`absolute right-0 bottom-5 z-10 bg-blue-600 hover:bg-blue-800 shadow ${darkMode ? 'shadow-none' : 'shadow-gray-500'} p-3 text-white rounded-full`}
          >
            <FaPlus />
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box w-[80%] md:w-[40%] lg:w-[23%]">
              <h3 className="text-lg font-bold my-3 text-center">
                Select your profile picture
              </h3>{' '}
              <form action="" onSubmit={handleProfilePictureSubmit}>
                {profilePic ? (
                  <div className="w-full flex flex-col items-center">
                    <div className="w-[90%] relative">
                      <img src={preview} alt={preview} className="w-full" />
                      {loading && (
                        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 z-10">
                          <span className="loading loading-spinner loading-lg"></span>
                        </div>
                      )}
                    </div>
                    <div className="w-full flex justify-around my-3">
                      <button
                        onClick={handleImageCancel}
                        className="py-1 px-3 font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-md text-blue-600"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="py-1 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <ul className="w-full flex flex-col gap-y-2">
                    <li>
                      <label
                        htmlFor="profilePicture"
                        className={`flex items-center gap-x-1 text-blue-500 ${darkMode ? 'border border-slate-700 bg-slate-800 hover:bg-slate-900' : 'border border-slate-300 bg-slate-100 hover:bg-slate-200'} rounded-md p-2`}
                      >
                        <input
                          type="file"
                          // accept="image/*"
                          accept=".png, .jpg, .jpeg"
                          name="profilePic"
                          id="profilePicture"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                        <MdOutlineCameraAlt className="text-xl" />
                        Upload photo
                      </label>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={handleRemovePhoto}
                        disabled={removePhotoLoading}
                        className={`w-full flex items-center gap-x-1 text-red-500 ${darkMode ? 'border border-slate-700 bg-slate-800 hover:bg-slate-900' : 'border border-slate-300 bg-slate-100 hover:bg-slate-200'}  rounded-md p-2`}
                      >
                        {removePhotoLoading ? (
                          <span className="w-full flex gap-x-2">
                            <span className="loading loading-spinner loading-sm"></span>
                            Loading...
                          </span>
                        ) : (
                          <>
                            {' '}
                            <RiDeleteBin6Line className="text-xl" />
                            Remove photo{' '}
                          </>
                        )}
                      </button>
                    </li>
                  </ul>
                )}
              </form>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
          {/* <label
        htmlFor="picture"
        className={`absolute right-0 bottom-5 z-10 bg-blue-600 hover:bg-blue-800 shadow ${darkMode ? 'shadow-none' : 'shadow-gray-500'} p-3 text-white rounded-full`}
      >
        <input type="file" name="" id="picture" className="hidden" />

        <FaPlus />
      </label> */}
        </div>
      </div>
      {profileView && (
        <ProfileView
          handleProfileView={handleProfileView}
          profileImage={userPicture}
        />
      )}
      <Toaster />
    </>
  );
};

export default ProfilePicture;

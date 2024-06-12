import { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, contract }) => {
  const [accessList, setAccessList] = useState([]);

  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };

  const deleting = async (address) => {
    await contract.disallow(address);
    await fetchAccessList(); // Refresh the access list after disallowing
  };

  const fetchAccessList = async () => {
    const addressList = await contract.shareAccess();
    setAccessList(addressList);
  };

  useEffect(() => {
    contract && fetchAccessList();
  }, [contract]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">Share with</div>
        <div className="body">
          <input
            type="text"
            className="address"
            placeholder="Enter Address"
          />
        </div>
        <form id="myForm">
          <select id="selectNumber">
            <option className="address">People With Access</option>
            {accessList.map((access, index) => (
              <option key={index} value={access.user}>
                {access.user} - {access.access ? "Access" : "No Access"}
              </option>
            ))}
          </select>
        </form>
        <div className="footer">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={sharing}>Share</button>
          <button
            onClick={() => {
              const address = document.querySelector("#selectNumber").value;
              deleting(address);
            }}
            id="deleteBtn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

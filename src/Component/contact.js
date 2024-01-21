import React, { useEffect, useState } from "react";
import "../Component/contact.css";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState(undefined);

  async function getMessages() {
    try {
      const res = await axios.get("http://localhost:4000/media/messages");
      if (res) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      if (!data) {
        getMessages();
      }
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  async function deleteCard(ind, id) {
    // await axios.delete(`http://localhost:4000/media/${id}`);
    data.splice(ind, 1);
    setData([...data]);
  }

  return (
    <>
      <div className="parent" id="parent">
        {data &&
          data.map((item, index) => (
            <div
              className={`card ${item.removing ? "fade-out" : ""}`}
              key={item._id}
            >
              <div className="card-side back p-2">
                <span
                  onClick={() => {
                    deleteCard(index, item._id);
                  }}
                >
                  {" "}
                  x{" "}
                </span>
                <div className="mx-auto p-2">
                  <div>Name: {item.name}</div>
                  <div>Phone: {item.phone}</div>
                  <div className="email" title={item.email}>
                    email: {item.email.slice(0, 10)}
                    {item.message.length > 10 ? "..." : ""}
                  </div>
                </div>
              </div>
              <div className="card-side front p-2">
                <div>
                  {item.message.slice(0, 250)}
                  {item.message.length > 250 ? "..." : ""}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Contact;

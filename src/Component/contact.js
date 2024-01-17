import React, { useEffect, useState } from "react";
import "../Component/contact.css";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState(undefined);

  async function getMessages() {
    // fetch("http://localhost:4000/media/messages", {
    //   method: "GET",
    // }).then((res) => {
    //   console.log(res);
    // });

    const res = await axios.get("http://localhost:4000/media/messages");
    console.log(res.data);
    if (res) {
      setData(res.data);
    }
  }

  useEffect(() => {
    if (!data) {
      getMessages();
    }
  }, [data]);

  return (
    <>
      <div className="parent" id="parent">
        {data &&
          data.map((item) => (
            <div className="card" key={item._id}>
              <div className="card-side back p-2">
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

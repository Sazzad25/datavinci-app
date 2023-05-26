import React, { useState } from "react";
export default function profiles({ Leaderboard }) {
  return <div id="profile">{Item(Leaderboard)}</div>;
}

function Item(data) {
  return (
    <div>
      <h1 className="text-2xl mt-4 text-center font-semibold">Leaderboard</h1>

      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={value.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{value.name}</div>
                        <div className="text-sm opacity-50">
                          {value.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <span>{value.score}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

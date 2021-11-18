import React from "react";

function Progress({ variant, now, min, max, title }) {
  return (
    <>
      <div>
        <h4 className="small font-weight-bold">
          {title}
          <span className="float-right">
            {now === "100" ? "Complete!" : `${now}%`}
          </span>
        </h4>
        <div className="progress mb-4">
          <div
            className={`progress-bar bg-${variant}`}
            role="progressbar"
            style={{ width: `${now}%` }}
            aria-valuenow={now}
            aria-valuemin={min}
            aria-valuemax={max}
          />
        </div>
      </div>
    </>
  );
}

export default Progress;

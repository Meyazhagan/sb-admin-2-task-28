import React from "react";

function BasicCard(props) {
  const { type, title, info, icon, progress } = props;
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${type} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${type} text-uppercase mb-1`}
              >
                {title}
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {info}
                  </div>
                </div>
                {progress && (
                  <div className="col">
                    <div className="progress progress-sm mx-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: `${progress.now}%` }}
                        aria-valuenow={progress.now}
                        aria-valuemin={progress.min}
                        aria-valuemax={progress.max}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas fa-${icon} fa-2x text-gray-300`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicCard;

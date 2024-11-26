import React from "react";
import DOMPurify from "dompurify";

const JobDescription = ({ description }) => {
  // Sanitize the passed HTML description prop
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <div className="job-description p-4 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
      {/* Use dangerouslySetInnerHTML to render sanitized HTML */}
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
    </div>
  );
};

export default JobDescription;

import React from "react";
function Card(props){
    return(
       <><div className="relative h-[400px] w-[300px] rounded-md">
       <img
         src="data:image/webp;base64,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RP9W4cZvDJayqRIqoezsFELEwNvygWFyPuleHOxUst8Cozh4RApX79/Yr0YesZwV9nLZhXQI6u5uB7LAAABFWElGeQEAAEV4aWYAAElJKgAIAAAABQAOAQIAEQEAAEoAAACYggIACAAAAFsBAAASAQMAAQAAAAEAAAAaAQUAAQAAAGMBAAAbAQUAAQAAAGsBAAAAAAAAQlJJREdFVE9XTiwgQkFSQkFET1MgLSBKVU5FIDE4OiBSb2hpdCBTaGFybWEsIENhcHRhaW4gb2YgSU5kaWEgcGljdHJ1ZWQgZHVyaW5nIGEgbmV0IHNlc3Npb24gYXMgcGFydCBvZiB0aGUgSUNDIE1lbidzIFQyMCBDcmlja2V0IFdvcmxkIEN1cCBXZXN0IEluZGllcyAmIFVTQSAyMDI0IGF0IEtlbnNpbmd0b24gT3ZhbCBvbiBKdW5lIDE4LCAyMDI0IGluIEJyaWRnZXRvd24sIEJhcmJhZG9zLiAoUGhvdG8gYnkgTWF0dGhldyBMZXdpcy1JQ0MvSUNDIHZpYSBHZXR0eSBJbWFnZXMpMjAyNCBJQ0MsAQAAAQAAACwBAAABAAAAAFhNUCCRBgAAaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyNCBJQ0MiIHBob3Rvc2hvcDpDcmVkaXQ9IklDQyB2aWEgR2V0dHkgSW1hZ2VzIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMjE1ODEzMDY5NyIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2V1bGE/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiIHBsdXM6RGF0YU1pbmluZz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi92b2NhYi9ETUktUFJPSElCSVRFRC1FWENFUFRTRUFSQ0hFTkdJTkVJTkRFWElORyIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPk1hdHRoZXcgTGV3aXMtSUNDPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5CUklER0VUT1dOLCBCQVJCQURPUyAtIEpVTkUgMTg6IFJvaGl0IFNoYXJtYSwgQ2FwdGFpbiBvZiBJTmRpYSBwaWN0cnVlZCBkdXJpbmcgYSBuZXQgc2Vzc2lvbiBhcyBwYXJ0IG9mIHRoZSBJQ0MgTWVuJmFwb3M7cyBUMjAgQ3JpY2tldCBXb3JsZCBDdXAgV2VzdCBJbmRpZXMgJmFtcDsgVVNBIDIwMjQgYXQgS2Vuc2luZ3RvbiBPdmFsIG9uIEp1bmUgMTgsIDIwMjQgaW4gQnJpZGdldG93biwgQmFyYmFkb3MuIChQaG90byBieSBNYXR0aGV3IExld2lzLUlDQy9JQ0MgdmlhIEdldHR5IEltYWdlcyk8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpkZXNjcmlwdGlvbj4KPHBsdXM6TGljZW5zb3I+PHJkZjpTZXE+PHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+PHBsdXM6TGljZW5zb3JVUkw+aHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2RldGFpbC8yMTU4MTMwNjk3P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+CgA="
         alt="AirMax Pro"
         className="z-0 h-full w-full rounded-md object-cover"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
       <div className="absolute bottom-4 left-4 text-left">
         <h1 className="text-lg font-semibold text-white">{props.username}</h1>
         <h2 className="text-balance bg-blend-color-burn text-white">age:{props.age}</h2>
         <p className="mt-2 text-sm text-gray-300">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
           debitis?
         </p>
         <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
           View Profile →
         </button>
       </div>
     </div></>
    );
}
export default Card;
import dayjs from "dayjs";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUserName = () => {
  return localStorage.getItem("userName");
};

export const getUserId = () => {
  return localStorage.getItem("userId");
};

export const getUserEmail = () => {
  return localStorage.getItem("userEmail");
};

export const getUserImage = () => {
  return localStorage.getItem("userImage");
};


export const clearToken = () => {
  return localStorage.removeItem("token");
};

export function getStatus(num) {
  switch (num) {
    case 0:
      return { color: "#fd7e14", text: "Accepted" };
    case 100:
      return { color: "green", text: "Completed" };
    case -1:
      return { color: "red", text: "Not Accepted" };
    default:
      return { color: "blue", text: `Partial Complete (${num}%)` };
  }
}

export const getMediaDetails = (mediaFile) => {
  return new Promise((resolve, reject) => {
    // Create a FileReader instance
    const reader = new FileReader();

    // Read the file as a data URL (base64)
    reader.readAsDataURL(mediaFile);

    reader.onload = () => {
      const base64Data = reader.result.split(',')[1];
      const fileName = mediaFile.name; 
      const fileExtension = fileName.split('.').pop(); 
      const mediaType = mediaFile.type.startsWith('image') ? 'I' : 'V'; // Media type ('I' for image, 'V' for video)

      // Resolve with the media details object
      resolve({
        MultimediaData: base64Data,
        MultimediaExtension: fileExtension,
        MultimediaFileName: fileName,
        MultimediaType: mediaType,
      });
    };

    // Handle errors
    reader.onerror = () => {
      reject(new Error("Failed to read the media file."));
    };
  });
};

export const priorityOptions = [
  { label: "Low", value: "Low" },
  { label: "High", value: "High" },
];

export const statusOptions = [
  { label: "All", value: "" },
  { label: "Not Accepted", value: "Not Accepted" },
  { label: "Partial Complete", value: "Partial Complete" },
  { label: "Accepted", value: "Accepted" },
  { label: "Completed", value: "Completed" },
];

export const defaultTaskPayload = {
  From: 1,
  To: 10,
  Title: "",
  UserId: getUserId(),
  IsArchive: false,
  UserIds: "",
  Priority: "",
  TaskStatus: "",
  FromDueDate: "",
  ToDueDate: "",
  SortByDueDate: "",
  SortColumn: "",
  SortOrder: "",
};

export const formatData = async (payload) => {
  let mediaDetails = {
    MultimediaData: "",
    MultimediaExtension: "",
    MultimediaFileName: "",
    MultimediaType: "",
  };

  if (payload?.file) {
    try {
      mediaDetails = await getMediaDetails(payload.file);
    } catch (error) {
      console.error("Error processing media file:", error.message);
    }
  }
  const userIds = payload?.UserIds?.map((user) => user?.UserId);
  const obj = {
    Id: "",
    AssignedBy: getUserId(),
    AssignedToUserId: "",
    AssignedDate: "",
    CompletedDate: "",
    Description: payload?.Description || "",
    IntercomGroupIds: [],
    IsActive: true,
    Latitude: "",
    Location: "",
    Longitude: "",
    Image: mediaDetails.MultimediaData,
    MultimediaData: mediaDetails.MultimediaData,
    MultimediaExtension: mediaDetails.MultimediaExtension,
    MultimediaFileName: mediaDetails.MultimediaFileName,
    MultimediaType: mediaDetails.MultimediaType,
    Priority: payload?.priority || "",
    TaskEndDateDisplay: payload?.TaskEndDate,
    TaskEndDate:
      dayjs(payload?.TaskEndDate).format("DD MMM YYYY") + " 12:00 AM",
    TaskDisplayOwners: `${payload?.TaskOwners?.length > 0 ? payload?.TaskOwners?.length + "Users" : ""}`,
    TaskOwners: payload?.TaskOwners || [],
    TaskStatus: "",
    Title: payload?.Title,
    UserDisplayIds: `${payload?.UserIds?.length > 0 ? payload?.UserIds?.length + "Users" : ""}`,
    UserIds: userIds || "",
    LeadId: payload?.LeadId || "",
  };
  return obj;
};
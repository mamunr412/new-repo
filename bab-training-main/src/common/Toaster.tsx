import { message } from "antd";
type NotificationType = "success" | "info" | "warning" | "error";

export const showToast = (
  content: string,
  type: NotificationType,
  duration?: number
) => {
  message[type]({
    content,
    duration,
  });
};

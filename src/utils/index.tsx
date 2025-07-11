import { CONFIG } from "@/CONFIG";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const API_URL = `http://127.0.0.1:8000/api`;
// export const API_URL = `http://khordamabackend.test/api`;

export enum NotificationType {
  ERROR = "error",
  SUCCESS = "success",
}

export const setPageTitle = (title: string) => {
  window.document.title = title;
};

export const showNotification = (
  message = "Something went wrong",
  type: NotificationType = NotificationType.ERROR,
  description?: string
) => {
  toast[type](message, {
    description: description,
  });
};

export const handleErrorResponse = (
  error: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  callback?: () => void,
  errorMessage?: string
) => {
  console.error(error);

  if (!errorMessage) {
    errorMessage = "Something went wrong";

    if (typeof error === "string") {
      try {
        error = JSON.parse(error);
      } catch (error) {
        // do nothing
      }
    }

    if (error instanceof AxiosError && error?.response?.data?.error) {
      errorMessage = error.response.data.error;
    } else if (error?.response?.data?.message) {
      errorMessage = error.response.data.message;
    } else if (error?.message) {
      errorMessage = error.message;
    }
  }

  showNotification(
    errorMessage &&
    errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1),
    NotificationType.ERROR
  );

  if (callback) {
    return callback();
  }
};

export function isExpressionValid(expression: string, variables: any) {
  if (!variables) {

    return false; // No variables found
  }

  try {
    // Try to replace each variable with 1 to see if the expression is valid
    let expressionWithNumbers: any = expression;

    variables.forEach((variable: any) => {
      expressionWithNumbers = expressionWithNumbers.replaceAll(
        "{" + variable + "}",
        "1"
      );
    });

    eval(expressionWithNumbers); // This will throw an error if the expression is invalid
  } catch (error) {

    return false; // Expression is invalid
  }

  return true; // Expression is valid
}

export function extractVariables(expression: string) {
  const variables = [];
  const regex = /{([\w]+?)}/g;
  let match;
  while ((match = regex.exec(expression)) !== null) {
    variables.push(match[1]);
  }
  return variables;
}

export function calculateTotal(valueOne: number, valueTwo: number, operation = '*') {
  let result: number;

  switch (operation) {
    case '+':
      result = valueOne + valueTwo;
      break;
    case '-':
      result = valueOne - valueTwo;
      break;
    case '*':
      result = valueOne * valueTwo;
      break;
    case '/':
      if (valueTwo === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      result = valueOne / valueTwo;
      break;
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }

  return FormatPrice(result);
}

export function FormatPrice(value: any) {

  return parseFloat(value).toFixed(2) + " " + CONFIG.CURRENCY_SYMBOL;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@prisma/client';

export interface ApiError {
  name: string;
  message: string;
  status: number;
}

const prismaErrorHandler = (e: any) => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === 'P2002') {
      return {
        name: 'Unique Constraint Violation Error',
        message: 'You are trying to duplicate a unique attribute',
        status: 409,
      };
    }
    if (e.code === 'P2003') {
      return {
        name: 'Foreign Constraint Violation Error',
        message: 'You are trying to delete an associated resource',
        status: 400,
      };
    }
    return {
      name: 'Request Format Error',
      message: 'There is an error in the fields you are providing',
      status: 400,
    };
  } else if (e instanceof Prisma.PrismaClientUnknownRequestError) {
    return {
      name: 'Unkown Request Error',
      message: 'An unknown error occured due to your request',
      status: 400,
    };
  } else if (e instanceof Prisma.PrismaClientRustPanicError) {
    return {
      name: 'Database Client Error',
      message: 'An error ocurred with the database client',
      status: 400,
    };
  } else if (e instanceof Prisma.PrismaClientInitializationError) {
    return {
      name: 'Database Initialization Error',
      message:
        'An error occurred due to a misconfiguration in the database',
      status: 400,
    };
  } else if (e instanceof Prisma.PrismaClientValidationError) {
    return {
      name: 'Validation Error',
      message:
        'Invalid attributes in the body or params of your request',
      status: 400,
    };
  }
};

const authErrorHandler = (e: { status: number }) => {
  const { status } = e;
  if (status === 401) {
    return {
      name: 'Unauthorized',
      message: 'Invalid token or no token sent',
      status: status,
    };
  } else if (status === 403) {
    return {
      name: 'Forbidden',
      message: 'You do not have access to this resource',
      status: status,
    };
  }
};

const errorHandler = (e: any): ApiError => {
  const prismaError = prismaErrorHandler(e);
  if (prismaError) return prismaError;
  const authError = authErrorHandler(e);
  if (authError) return authError;
  return {
    name: 'Unknown Server Error',
    message:
      'An unknown server error has occured, apologies for the inconvinience',
    status: 500,
  };
};

export default errorHandler;

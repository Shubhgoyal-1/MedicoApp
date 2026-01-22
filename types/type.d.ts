/*Imports */

import { TouchableOpacityProps } from 'react-native';

/*UI Interfaces */

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  IconLeft?: React.ComponentType<any>;
  textStyle?: string;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

export interface StepIndicatorProps {
  current: number;
  total: number;
}

export interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  labelStyle?: string
  textStyle?: string
  rightIcon?: React.ReactNode;
  editable?: boolean
}

export interface TabBarIconProps {
  focused: boolean;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  offsetX?: number
}

export interface Vital {
  id: string;
  label: string;
  value: string;
  unit?: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  valueColor?: string;
  iconColor?: string;
}


/*ENUM AND UNIONS */

export type WorkplaceType = "hospital" | "clinic" | "";
export type Gender = "Male" | "Female" | "Other" | "";
export type BloodGroup = "AB+" | "AB-" | "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "";
export type AppointmentStatus = "Pending" | "Confirmed" | "Cancelled";
export type MedicationTime = "morning" | "afternoon" | "evening" | "morning-afternoon" | "morning-evening" | "afternoon-evening" | "morning-afternoon-evening" | "after_meals" | "before_meals";
export type AttentionNeed = "Critical" | "Minor" | "Normal";
export type PatientForDoctor = Omit<
  Patient,
  "aadharNo"
>;

/*Core Entities */

export interface FullAddress {
  houseNumber: string;
  address: string;
  landmark?: string;
  city: string;
  state: string;
}

export interface Workplace {
  type: WorkplaceType;
  hospitalId?: string;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
}

/* Doctor */

export interface DoctorBasic {
  firstName: string;
  lastName: string;
}

export interface Doctor extends DoctorBasic {
  specialization: string;
}


/*Patient */

export interface PatientBase {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  dob: string;
  gender: Gender;
  aadharNo: string;
  avatarUrl?: string;
}

export interface PatientDetails extends PatientBase {
  bloodGroup?: BloodGroup;
  allergies?: string;
  fullAddress: FullAddress;
}

export interface Patient extends PatientDetails {
  medications: PatientMedication[];
  medicalReports: MedicalReport[];
  medicalHistory: MedicalHistory[];
}


/*Medical Interfaces */

export interface Medication {
  name: string;
  sideEffects: string;
  notRecommendedFor: string;
}
export interface PatientMedication {
  medicationId: Medication;
  dosage: string;
  frequency: string;
  time: MedicationTime;
  startDate?: string;
  endDate?: string;
  active: boolean;
}

export interface MedicalHistory {
  condition: string;
  diagnosisDate: string;
  notes?: string;
  treatment?: string;
  resolved: boolean;
  doctorId: DoctorBasic;
}

export interface MedicalReport {
  reportUniqueId: string
  reportName: string;
  reportDate: string;
  reportFileUri: string;
  notes?: string;
  doctorName?: string;
  doctorId?: string
  attentionNeed?: AttentionNeed;
}

/*Appointment */

export interface Appointment {
  patientId: string;
  doctorId: Doctor;
  date: string;
  time: string;
  number?: number;
  status: AppointmentStatus;
  isFinished: boolean;
}

export interface AppointmentDoctor {
  date: string;
  time: string;
  status: AppointmentStatus;
  isFinished: boolean;
  patientId: PatientForDoctor;
  number: number;
}





/*Forms */

export interface DoctorRegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  aadharNo: string;
  gender: Gender;
  password: string;
  confirmPassword: string;
  phone: string;
  specialization: string;
  experience: number;
  feePerVisit: number;
  licenseNumber: string;
  patientLimit: number;
  workplace: Workplace;
}

export interface PatientRegistrationForm {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  phone: string;
  dob: Date | string;
  gender: Gender;
  bloodGroup?: BloodGroup;
  allergies?: string;
  aadharNo: string;
  fullAddress: FullAddress;
}

export interface HospitalProps {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: number;
  pincode: number;
  avatarUrl?: string;
}

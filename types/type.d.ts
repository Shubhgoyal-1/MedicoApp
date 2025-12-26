import { StyleProp, TouchableOpacityProps } from 'react-native';

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  IconLeft?: React.ComponentType<any>;
  textStyle?: string;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface StepIndicatorProps {
  current: number;
  total: number;
}

import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface Vital {
  id: string;
  label: string;
  value: string;
  unit?: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  valueColor?: string;
  iconColor?: string;
}


declare interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  labelStyle?: string
  textStyle?: string
  rightIcon?: React.ReactNode;
}

export type WorkplaceType = "hospital" | "clinic" | "";
export type Gender = "Male" | "Female" | "Other" | "";
export type BloodGroup = "AB+" | "AB-" | "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "";

export interface Workplace {
  type: WorkplaceType;
  hospitalId?: string;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
}

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

export interface HospitalProps {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: number;
  pincode: number;
  avatarUrl?: string;
}

export interface FullAddressPatient {
  houseNumber: string;
  address: string;
  landmark?: string;
  city: string;
  state: string;
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
  fullAddress: FullAddressPatient;
}


declare interface TabBarIconProps {
    focused: boolean;
    icon: React.ComponentProps<typeof Ionicons>["name"];
    title: string;
}

export interface DoctorPopulated {
  firstName: string;
  lastName: string;
  specialization: string;
}
export interface Appointment {
  patientId: string;
  doctorId: DoctorPopulated; 
  date: string;
  time: string;
  number?: number;
  status: "Pending" | "Confirmed" | "Cancelled";
  isFinished: boolean;
}


export interface Medication {
  name: string;
  sideEffects: string;
  notRecommendedFor: string;
}


export type MedicationTime = "morning" | "afternoon" | "evening" | "morning-afternoon" | "morning-evening" | "afternoon-evening" | "morning-afternoon-evening" | "after_meals" | "before_meals";

export interface PatientMedication {
  medicationId: Medication;
  dosage: string;
  frequency: string;
  time: MedicationTime;
  startDate?: string; 
  endDate?: string;
  active: boolean;
}

export interface DoctorBasic {
  firstName: string;
  lastName: string;
}

export interface MedicalHistory {
  condition: string;
  diagnosisDate: string;
  notes?: string;
  treatment?: string;
  resolved: boolean;
  doctorId: DoctorBasic;
}

export type AttentionNeed = "Critical" | "Minor" | "Normal";

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

export interface AgeDetails {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalDaysFormatted: string;
  formattedId: string;
  formattedEn: string;
  dobFormattedId: string;
  dobFormattedEn: string;
}

export function getLiveAge(referenceDate?: Date): AgeDetails {
  const birthDate = new Date(2002, 11, 28); // 28 Desember 2002
  const now = referenceDate || new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthDays;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const diffTime = Math.abs(now.getTime() - birthDate.getTime());
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return {
    years,
    months,
    days,
    totalDays,
    totalDaysFormatted: totalDays.toLocaleString("id-ID"),
    formattedId: `${years} Tahun ${months} Bulan ${days} Hari`,
    formattedEn: `${years} Years ${months} Months ${days} Days`,
    dobFormattedId: "28 Des 2002",
    dobFormattedEn: "Dec 28, 2002",
  };
}

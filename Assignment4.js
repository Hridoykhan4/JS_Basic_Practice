/* Problem-01 : Help The Zoo Manager
⚠️ Function Name Must be calculateMoney( )

বাকে র ভাই মি রপুর চি ড়ি য়াখানার ম্যানে জার । প্রতি দি ন তাকে অসংখ্য টি কে ট বি ক্রি করতে হয় । টাকার হি সে ব এ
তি নি সবসময় গড়মি ল বাধি য়ে ফে লে ন । তুমি যে হে তুসদ্য ডে ভে ল োপার হচ্ছ ো বাকে র ভাই ত োমার কাছে একটি
হে ল্প চে য়ে ছে । বাকে র ভাই কে calculateMoney( ) নামে একটি ফাংশন বানি য়ে দি তে হবে যাকে প্রতি দি ন
টি কে ট সে ল করার সংখ্যা ইনপুট দি লে সে সকল খরচ বাদ দি য়ে ম োট কত টাকা বাকে র ভাইর কাছে থাকে তা বলে
দি তে পারে ।

চি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।

Input :
ফাংশন টি ইনপুট নে বে টি কে ট সে ল করার সংখ্যা । ইনপুট হবে একটি পজি টি ভ সংখ্যা । (0<=Input)

Output :
টি কে টে র আয় ও ব্যয় গুল ো ক্যালকুলে ট করে বাকী কত টাকা বাকে র ভাইর কাছে থাকল ো সে টা ই ত োমার
ফাংশন আউটপুট হি সে বে রি টার্ন করবে । আউটপুট পজি টি ভ নে গে টি ভ যে ক োন কি ছুই হতে পারে ।
💡যে মন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে ( 10 * 120) - ( 500 + (8 * 50) ) = 300

Challenge 📢 : বাকে র ভাই যদি ইনপুট হি সে বে নে গে টি ভ সংখ্যা দে য় তাহলে ত োমাকে একটা error ম্যাসে জ
আউটপুট হি সে বে রি টার্ন করে দি তে হবে । */

/* function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Please enter valid quantity";
  }
  const singleTicketPrice = 120;
  const securitySalary = 500;
  const lunchCost = 50;
  const staff = 8;
  const staffLunch = staff * lunchCost;
  const totalCost = securitySalary + staffLunch;

  const totalIncome = ticketSale * singleTicketPrice;

  const actualIncome = totalIncome - totalCost;

  return `Total Profit ${actualIncome} Taka`;
}

console.log(calculateMoney(1055));
 */

/* Problem-02: Good Name , Bad Name
⚠️ Function Name Must be checkName()

সালমান ভাই ও রাশে দা ভাবীর ক োল জুড়ে এসে ছে একটা পুত্র সন্তান । সালমান ভাই পুত্র সন্তানে র একটা ভাল ো নাম
রাখতে চান । কি ন্তু তাদে র এলাকায় গ্রামে র মানষু রা নাম কে ব্যাংগ করে উচ্চারন করে । যে মন কার ো নাম salman
হলে তারা বলে সালমাইন্যা । কার ো নাম jafor হলে তারা বলে জাফইর্যা । সালমান ভাই চান না তার পুত্র সন্তান কে
কে উ এভাবে ক্ষে পাক ।
সালমান ভাই দে খতে পে লে ন যে যাদে র নামে র শে ষে a, y, i , e , o , u, w থাকে তাদে র কে আসলে ক্ষে পান ো
যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনে র নাম গুল ো কে ব্যাংগ করে উচ্চারন করা যায় না ।

এখন ত োমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লি খে দি তে হবে । যে টা একটা স্ট্রি ং
ইনপুট নে বে । এবং ফাংশন টি চে ক করে দে খবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রি টার্ন
করবে Good Name আর নাম টি খারাপ হলে রি টার্ন করবে Bad Name

Input : ত োমার ফাংশন টি ইনপুট নে বে একটি নাম । ইনপুট টি হবে একটি স্ট্রি ং । যে খানে character গুল ো
ছ োট হাতে র বা বড় হাতে র হতে পারে ।

Output : ফাংশন টি আউটপুট হি সে বে রি টার্ন করবে একটি স্ট্রি ং । যার ভ্যালুহবে Good Name অথবা Bad
Name

Challenge 📢 : ইনপুট হি সে বে স্ট্রি ং টাইপে র বাইরে অন্য যে ক োন কি ছুদি লে এটা শুধুমাত্র “invalid” রি টার্ন
করবে । */
/* function checkName(names) {
  if (typeof names !== "string") {
    return "invalid";
  }
  const lastCharacter = names[names.length - 1].toLowerCase();

  const weirdLasts = "aeieouw";

  if (weirdLasts.includes(lastCharacter)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

console.log(checkName("salman"));
console.log(checkName("RAFEE"));
console.log(checkName("jhankar"));
console.log(checkName(1111)); */

/* 
Problem 03 : Virus in my Array
⚠️ Function Name Must be deleteInvalids()

ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হি সে বে একটি Array
নে বে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রি টার্ন করতে হবে ।
তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
রি টার্ন করবে [ 1 , 12 , 0 , -1 ]

Input :
ফাংশন টি ইনপুট নে বে একটি Array । Array এর উপাদান গুল োর Datatype যে ক োন ধরনে র হতে পারে ।

Output :
ফাংশন টি আউটপুট দে বে আরে কটি Array । Array এর উপাদান গুল ো হবে শুধুমাত্র নাম্বার ।

Challenge 📢 : ফাংশন টি তে Array ছাড়া অন্য ক োন ভ্যালুপাস করলে সে টা একটা error message
রি টার্ন করবে । */

/* 
function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return `Error! Only Insert Array`
    }

    if(array.length === 0){
        return 'Empty Array should not inserted'
    }
    
    const onlyNums = [];

    for (const arr of array) {
            if(typeof arr === 'number' && !isNaN(arr)){
                onlyNums.push(arr);
            }
    }
    return onlyNums;
}

const arr = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
console.log(deleteInvalids(arr));
console.log(deleteInvalids([1,2,-3]));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
 */

/* function password(info) {
  let count = String(info.birthYear);
  const split = count.split("").length;
  if (!info.name || !info.birthYear || !info.siteName || split !== 4) {
    return "Invalid";
  }
  return `${info.siteName.charAt(0).toUpperCase() + info.siteName.slice(1)}#${
    info.name
  }@${info.birthYear}`;
}

console.log(
  password({ name: "kolimuddin", birthYear: 1991, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
 */

/* Problem 04 : Make A Great Password
⚠️ Function Name Must be password()

কলি মুদ্দি ন সাহে ব নতুন ফ োন কি নে বি ভি ন্ন ওয়ে বসাইটে ভি জি ট করে ন এবং বি ভি ন্ন এপ্লি কে শনে একাউন্ট ক্রি য়ে ট
করে ন । কি ন্তু তি নি পাসওয়ার্ড মনে রাখতে পারে ন না । তি নি এমন একটি ফাংশন চান, যে খানে তার ইনফরমে শন
এবং ওয়ে বসাইট নে ম দি লে সে টা কলি মুদ্দি ন সাহে ব কে একটি মনে রাখার মত ো পাসওয়ার্ড জে নারে ট করে দি তে
পারবে ।
তার জন্য password() নামে একটা ফাংশন লি খতে হবে ।

Input :
ফাংশন টি একটা object ইনপুট হি সে বে নি বে । যে খানে শুধুতি ন টি প্র োপার্টি থাকবে ।
{ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
⚠️ অব্জে ক্ট এ প্র োপার্টি গুল োর নাম একদম সে ইম হতে হবে ।

Password-Structure :
Website Name
(প্রথম অক্ষর বড় হাতে র হবে )

# ইউজার নে ম @ birthYear

Output:
ফাংশন টি উপরে র স্ট্রাকচার অনযু ায়ী একটা স্ট্রি ং আউটপুট আকারে রি টার্ন করবে ।
Google#kolimuddin@1999

Challenge 📢: যদি ক োন একটা প্র োপার্টি মি সি ং থাকে অথবা যদি birthYear 4 ডি জি টে র না হয় ফাংশন টি
রি টার্ন করবে একটি স্ট্রি ং যার ভ্যালুহবে invalid */

/* function monthlySavings(arr , livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'invalid input'
    }

    let tax = 0

    let income = 0;
    for(const money of arr){
        income += money;
    }

    for (const elements of arr) {
        if(elements >= 3000){
           tax +=  ((elements * 20) / 100);            
        }
    }
    
    const finalSavings = income - (tax + livingCost);

    if(finalSavings < 0){
        return 'Earn More';
    }
    return finalSavings;
}

console.log(monthlySavings([1000,2000,3000],5400))
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))
console.log(monthlySavings(100, [ 900 , 2700 , 3400])) */
/* 
Problem 05 : Monthly Savings of a Freelancer
⚠️ Function Name Must be monthlySavings()

ফ্রি ল্যান্সার শাহে দ প্রতি মাসে বে শ কি ছুপে মে ন্ট ক্লায়ে ন্ট দে র থে কে পায় । কি ন্তু পে মে ন্ট এর কি ছুট্যাক্স পরি শ োধ
এবং নি জে র লি ভি ং কস্ট এর কারনে সে সে ভি ংস করতে পারে না । তার সে ভি ংস এর হি সে ব করার জন্যে তাকে
monthlySavings() নামে একটি ফাংশন তৈ রী করে দি তে যে টা ইনপুট হি সে বে নে বে একটি Array (প্রতি মাসে
পাওয়া সকল পে মে ন্ট ) এবং একটি Number ( শাহে দে র লি ভি ং কস্ট ) ।
শাহে দে র যে সকল পে মে ন্ট 3000 টাকা বা তার বে শি সে সকল পে মে ন্ট থে কে ব্যাংক Tax হি সে বে ২০% টাকা কে টে
নে য় । এখন ম োট ইনকাম থে কে Tax গুল ো বাদ দি য়ে এবং Living cost বাদ দি য়ে বাকী যে টাকা থাকে সে টা ই
হল ো শাহে দে র সে ভি ংস । অর্থাৎ ফাংশন টি শাহে দে র সে ভি ংস কে রি টার্ন করবে । যদি সে ভি ংস করার মত ো টাকা না
থাকে অর্থাৎ সে ভি ংস এর ভ্যালুযদি ০ এর চে য়ে কম হয় তাহলে ফাংশন টি রি টার্ন করবে একটি স্ট্রি ং তাহল ো “earn
more” ।

Input :
ফাংশন টি ইনপুট নে বে একটি Array (All payments) এবং একটি number (Living cost) ।

Output :
ফাংশন টি একটি number অথবা string রি টার্ন করবে ।
● যদি savings 0 বা তার থে কে বে শি হয় তাহলে রি টার্ন করবে একটা number ( Total Savings )
● যদি savings 0 থে কে ছ োট হয় তাহলে রি টার্ন করবে String যার ভ্যালুহবে earn more

Challenge 📢 : ফাংশন টি তখন invalid input কে string টি রি টার্ন করবে ।
● যদি প্রথম প্যারামি টার টি Array না হয়
● যদি ও 2য় প্যারামি টার টি নাম্বার না হয় */

<template>
    <div class="w-100 h-100 inline-block p-5 bg d-flex justify-content-center align-items-center ">
        
<form @submit.prevent="submitForm" class="bg-white rounded-3 form-x p-5">
    <h1 class="text-dark fs-1 fw-bold text-center">Register Form</h1>
  <div class="mb-3">
    <label for="name" class="form-label fs-6 text-dark fw-bold">Full Name</label>
    <input type="text" class="form-control" id="fullname" v-model="fullname" placeholder="Enter a name"/>
  </div>
  <div class="mb-3">
    <label  class="form-label fs-6 text-dark fw-bold">Email Address</label>
    <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter a email"/>
  </div>
  <div class="mb-3">
    <label  class="form-label fs-6 text-dark fw-bold">Mobile number</label>
    <input type="text" class="form-control" id="mobile" v-model="mobile" placeholder="Enter a mobile number"/>
  </div>
  <div class="mb-3">
    <label class="form-label fs-6 text-dark fw-bold">Birth of Date</label>
    <input type="date" class="form-control" id="date" v-model="date"/>
  </div>
  <div class="mb-3">
    <label class="form-label ml-0 fs-6 text-dark fw-bold">Gender</label>
  </div>
  <div class="form-check mt-0">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Male" value="Male" v-model="gender">
  <label class="form-check-label" for="flexRadioDefault1">Male</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Female" value="Female" v-model="gender">
  <label class="form-check-label" for="flexRadioDefault1">Female</label>
</div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-6 text-dark fw-bold">Address</label>
    <input type="text" class="form-control" id="address" v-model="address" placeholder="Enter your address"/>
    <input type="text" class="form-control mt-2" id="country" v-model="country" placeholder="Enter your country"/>
    <input type="text" class="form-control mt-2" id="postal" v-model="postal" placeholder="Enter your postalcode"/>
  </div>
  <div class="d-grid">
  <button class="btn" type="submit">Submit</button>
</div></form>
    </div>
</template>

<script>
    export default{
        methods:{
            submitForm(){
                const formData={
                    fullname:this.fullname,
                    email:this.email,
                    mobile:this.mobile,
                    date:this.date,
                    gender:this.gender,
                    address:this.address,
                    country:this.country,
                    postal:this.postal
                };
                this.$router.push({
                    path:'/another-page',
                    query:formData
                });
            },
        },
    };
</script>

<style  scoped>
.form-x{
  width: 50%;
}
.bg{
    background-color: blueviolet;
  
}
.btn{
    background-color: blueviolet;
    color: white;
    font-size: 20px;
}
@media(max-width:900px){
  .form-x{
  width: 100%;
  padding: 0;
}
}
</style>
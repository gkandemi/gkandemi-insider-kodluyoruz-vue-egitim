<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        Main Frame
      </div>
      <div class="card-body">
        {{ persons }}
        <div class="row mt-3">
          <div class="col-6">
            <LeftSide
              @PersonAddEvent="addPerson($event)"
              :title="left_side_title"
            />
          </div>
          <div class="col-6">
            <RightSide :title="title" :persons="persons" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
export default {
  components: {
    LeftSide,
    RightSide
  },
  data() {
    return {
      persons: ["Ahmet", "Mehmet", "Cemil"],
      title: "Title from Data",
      left_side_title: "Left Side Title",
      counter: 10
    };
  },
  methods: {
    addPerson(person) {
      this.persons.push(person);
    }
  }
};
</script>

<template>
  <div>
    <page-top title="Patients" path="/patients" current-view="Patient view"/>
    <div class="patient_stats_section">
      <div>
        <p class="text-gray-400">Session token</p>
        <div>
          <span class="font-bold text-2xl">
            230
          </span>
        </div>
      </div>
      <StatsCard title="Attendance rate" value="67%"/>
      <StatsCard title="Billable Days" value="24"/>
      <StatsCard title="Number of Admissions" value="4"/>
      <div>
        <button
            class="primary_button_icon">
          Export report
          <img alt="export icon" src="../components/icons/export-icon.svg"/>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <PatientInfoCard
          :expanded="expanded"
          @on-expand="handleExpansion"
      />
      <ClinicInformationCard
          :expanded="expanded"
          @on-expand="handleExpansion"
      />
    </div>
    <attendance-table/>
  </div>
</template>

<script lang="ts">
import PageTop from "@/components/layout/PageTop.vue";
import StatsCard from "@/components/features/StatsCard.vue";
import PatientInfoCard from "@/components/features/PatientInfoCard.vue";
import ClinicInformationCard from "@/components/features/ClinicInformationCard.vue";
import {defineComponent} from "vue";
import AttendanceTable from "@/components/features/AttendenceTable.vue";

export default defineComponent({
  name: 'patients-view',
  components: {AttendanceTable, PageTop, StatsCard, ClinicInformationCard, PatientInfoCard},
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    handleExpansion() {
      this.expanded = !this.expanded
    }
  }
})


</script>
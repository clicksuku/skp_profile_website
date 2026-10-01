export type Photo = {
  id: string;
  src: string;
  alt: string;
};

// Sourced from the shared Google Photos album: https://photos.app.goo.gl/1uCmFaHnxjMbwU9E6
const PHOTO_BASE_URLS: { base: string; alt: string }[] = [
  { base: "https://lh3.googleusercontent.com/pw/AP1GczM82SRVOT3_7_O2fp2Wrs_jRfrgCrxY7V_gYit23BvzgT3c_Ch6qHa6k8AGjnnXhk2TPxmUriH5a-G3NvLLachmUEhZhAd8YZsrm9s6RPP6OwmvvkWa", alt: "North East" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczM8k4QR2c-SXIOITCbjR6AlzgmFF9heQdvKNmfQf9-F9qZVbP8eLrR4O0ImtsKD0bmornEzKVT1L2Ez8L8WMIsIy8FwiGimIk2wiE2upQcBhn4tqYDc", alt: "Pumpkins" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczM9ohKHWArf9kFVtxZem_2k-DOcYg4PWd-RNQphYF3vDn5VaAAlkab0Rsmmj66xIluf8YCkhsN90SGz6hLZOJW_DvUEFd8n21WndRGk_MWKaFO_lcDx", alt: "Gopalasamy Betta" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczMC8Ws6YudVyMCzDlCTJsdHrXInBB7umslHGoHujHfv3HR-upOLitssjbzi7aCZi04JKPJYydQ0C5V0qFZ7aIpAtmfgHUsDWnHyGZYAhgBs7PUok_-Q", alt: "A hut in Araku Valley, Andhra" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczMh34ptySYBLiNxqmMIpXoDkULpC8zMCgN4ID24XaQg3CqU67tWtS48bkoGZhNmp4XfLIZZ-gk_vXHdqr63fNeL4aRsAKoOk5-71mLNPXbeGWthyNPL", alt: "Tanjore Temple II" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczMXqLj5Ag_pxT_XCGlo71FN4I5JVL0os38iOmyPjCTcgoqYlpvjov101esNh5Q_if4qBd5zDkUfkmjXuFk4qmnLaN5WG2Q9e0W6AlbIrui96Au7oegX", alt: "Temple" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczMzXfwMTUnkkVQBVRWzEUNk7d-pORPnQcpcbRZeUYorfC5cBOU09eeKOpvS4wTEiUiUJQmhusMLcJyWHtJqRNYEGhFEVd1QmkqffZbUqsegUnU8W5fO", alt: "Gopalasamy Betta II" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczN_Lb130TQKbBWUjJ6EOiQbsS0l3BACGZFV8O4D9Xp3vgnUhv4z0sRK8mxgyNjEHR9hRE8Jni5Mc-ifFFDeuAzDIRM1dOUfdaPoMOWjdUn2VSdAsm4-", alt: "Khasi Woman" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczN-A_NvS_xR_2UQfNmEiQPnoSSAMqXz09ETZ6afjoR8UJNe4rhYcfPhD_EDj3mHD8UdF2MPGMUB9eoauOb0jLJy34cbKrCOf6A4MrcXPG7kD-uYoico", alt: "Prayer Bells" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczN0PrWuOkCPng0iBCzOYOQEe1e6XVdv_cqgT7Sm_tYKWhmfkQVvC9CzMJmXum1xR3yNoYj0NiCYiY8CzFjKuil9rzziqqKj1lk5Z-qgsFFtErtySvWi", alt: "Araku Valley" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczN24UN8KijzVq2N6KsrFG1aW5Pq_ApoDMFLkcN8wdba-b_Lx-ew_vaGpZsK2gipy9AAZc9zWC2Mm2yU_NvcY9UZ0eL4L1v5QY3old986toschaRKQ5u", alt: "Ooty" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczNChOZuu_W1eydoHqcD1kjoDSh-7zMCaTS9gpsNYydWtawbuCa4Y7O1w88PV0xiT58UfBL9i-ksyQ8IdrNDy8AorhqmlYBUHky3uxA6ImTwUB4afzFO", alt: "Tanjore" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczNKXasty5s-CCOKyJemQc_HWgI6U1VHynYhaRnTW9LSGk0q81fUo3Qi9xRT9jetAPmIs1zy-J_qrQ81mdnYRysbNDVnaFhi3Gb0nh4aoMIRNkK3mcrX", alt: "Tuskeress, Bandipur" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczNLzbw0_g5k_bxo1myliGeX2WWknYKDSM4e3-_nBnzy_6iS9iSm_QXrDgzkybmaL-WD0JRUa0mF_DhP1veT91HY3WflLpsqTkhbNYKYK6pn3B3oMdya", alt: "Gopalasamy Betta I" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczNM9cED5HahENWcwgD19RYyp6qAui3830f9VTVuBfWwWNmtotEqA8UsGBB2mYHGk_Hr83rTCqqcfTJVcCqOw_FFZuWvTqoJtS3hZhtSX46_XjRz0i-E", alt: "Tanjore, Black & White" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczNoKq87OqtKrgA_1XBdNA2haVUmVciKpC5Ddc3eIwks_8HLxu8lFBDyHCkknkP2UYjDFQURp2TkOgyaIa5uhFuXC6qejgPV35VNGR7OTNZpGvUaaGmW", alt: "Bharatnatyam" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczNS5nWUaE8MPLyNDDpsuW9rJDnvFMjjPBXZm5Qt2VWXXQDn1Am96aHE0pGyLF0vutJmRyaqhpa8-6jOHdOoEhVWjHSPROhZdg8-B4LnxxMl_M4Uy5iC", alt: "Walk in the Lake" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczNTwx5ayFYMoTo9eOOGrmtIssEhEO4dxpCUzeEukWNNRM5WXidIwL3Y4TqW3ZyidbpO4mplYpAIbRA6EyjJFbjQheKaJqKteZj--LXtCZ2940XbCVKL", alt: "Tanjore Temple" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczNug95Gv69bGyqN_IVlAR45PEpsd3YN7QVIk407aewxshvRdN8k3v7msL563zWBu6Mwu0YrWUsIFLbH88hhSucUY-Cq6H3jNAo_rmnvqDfDk24OHKou", alt: "Tanjore Temple, Profile" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczNVpPOTu_bgtKTrUmstkCpl8KJSF6gV05YSVdvTfXypgIaXZ40Tef1bo_RCESNTsZHuErh3f_DFZaORUG1_Br3_904VU2WVB86-BDpqHOAU5Y4gjYPK", alt: "Old Woman" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczOJxT5VPXVXs4ofGZiy-VwIvN9-Ha3iqEp31L3DYDhX6TaXAzK8zRdHL3m0vQVPn5rMhbcaXbOeRx1NpcudHL9gvul6Ri_RpdqrrwmKFR6xq6HcT6co", alt: "Lonavala" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczOxzopLvTSwvZmylUVg9yDtugxSnXYRH88B8JWI1bmi17BIFC45PoIXnQU7lS643jN1cV1c-1_z96KJ7V9t-IABDdOz49Y31OKI55NbCOqR31ZDiA6d", alt: "Smile" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczP2B5dM_95BEI3XVGvdEH7ysOKsgfkyGs0HKG9Nvin-mZtBCQXafcOoCeD5YLT4yDEERZq7Kx1_kzUTO2CVDBCaVucxnqylKTxo016GVT0xibuUeoCb", alt: "Untitled" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczP3nnlIsGKJRi6l0AQGqXa7OW81NiyI7Bw0VgzqSblJe42a8uZZ8zfy648_OzwGbj0HD06okRRb3HnCEPK3YAcG9h2BhkyEkKBYGu6pqJ8kCYELYQTq", alt: "Lonavala, Sheep" },
  { base: "https://lh3.googleusercontent.com/pw/AP1GczPFF0Y6LCCqfq8mAscUJ6LHOrs8eDOj1z7jWqXg5NAOqTILl9-_N6m6dQbyuL8Lng76Plywnj0Jmh_34ezX3h77KXbl8l16RO2cNo1GhEYQApMq8fnO", alt: "Lake Umiam" },
];

export const photos: Photo[] = PHOTO_BASE_URLS.map(({ base, alt }, index) => ({
  id: String(index + 1).padStart(2, "0"),
  src: `${base}=w600-h450`,
  alt,
}));

INSERT INTO "public"."company" ("id", "createdAt", "updatedAt", "name") VALUES
('8507a4df-5518-4895-ae8d-da195a21e44a', now(), now(), 'companyA'),
('8507a4df-5518-4895-ae8d-da195a21e44b', now(), now(), 'companyB');

INSERT INTO "public"."user" ("id", "createdAt", "updatedAt", "name", "companyId") VALUES
-- Users belonging to companyA
('df93cd4b-0f12-769e-687f-b45f8f3f5761', now(), now(), 'user01', '8507a4df-5518-4895-ae8d-da195a21e44a'),
('df93cd4b-0f12-769e-687f-b45f8f3f5762', now(), now(), 'user02', '8507a4df-5518-4895-ae8d-da195a21e44a'),
-- Users belonging to companyB
('df93cd4b-0f12-769e-687f-b45f8f3f5763', now(), now(), 'user03', '8507a4df-5518-4895-ae8d-da195a21e44b'),
('df93cd4b-0f12-769e-687f-b45f8f3f5764', now(), now(), 'user04', '8507a4df-5518-4895-ae8d-da195a21e44b'),
('df93cd4b-0f12-769e-687f-b45f8f3f5765', now(), now(), 'user05', '8507a4df-5518-4895-ae8d-da195a21e44b'),
-- Users belonging to no company
('df93cd4b-0f12-769e-687f-b45f8f3f5766', now(), now(), 'user06', NULL),
('df93cd4b-0f12-769e-687f-b45f8f3f5767', now(), now(), 'user07', NULL);

INSERT INTO "public"."post" ("id", "createdAt", "updatedAt", "content", "userId") VALUES
('4231cfd7-fda3-403a-81da-fd05946bbbf1', now(), now(), 'post01 by user01', 'df93cd4b-0f12-769e-687f-b45f8f3f5761'),
('4231cfd7-fda3-403a-81da-fd05946bbbf2', now(), now(), 'post02 by user01', 'df93cd4b-0f12-769e-687f-b45f8f3f5761'),
('4231cfd7-fda3-403a-81da-fd05946bbbf3', now(), now(), 'post03 by user02', 'df93cd4b-0f12-769e-687f-b45f8f3f5762'),
('4231cfd7-fda3-403a-81da-fd05946bbbf4', now(), now(), 'post04 by user02', 'df93cd4b-0f12-769e-687f-b45f8f3f5762'),
('4231cfd7-fda3-403a-81da-fd05946bbbf5', now(), now(), 'post05 by user04', 'df93cd4b-0f12-769e-687f-b45f8f3f5764'),
('4231cfd7-fda3-403a-81da-fd05946bbbf6', now(), now(), 'post06 by user04', 'df93cd4b-0f12-769e-687f-b45f8f3f5764'),
('4231cfd7-fda3-403a-81da-fd05946bbbf7', now(), now(), 'post07 by user06', 'df93cd4b-0f12-769e-687f-b45f8f3f5766'),
('4231cfd7-fda3-403a-81da-fd05946bbbf8', now(), now(), 'post08 by user06', 'df93cd4b-0f12-769e-687f-b45f8f3f5766');

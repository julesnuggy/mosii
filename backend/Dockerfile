FROM maven:3.6.3-openjdk-14-slim AS build
WORKDIR build
COPY ./src ./src
COPY ./pom.xml .
RUN mvn clean package -DskipTests -Dactive.profile=dev

FROM openjdk:14
WORKDIR api
COPY --from=build /build/target ./target
ENTRYPOINT ["java", "-jar","./target/mosii-0.1.0.jar"]
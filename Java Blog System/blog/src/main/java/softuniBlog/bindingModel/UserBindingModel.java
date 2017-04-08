package softuniBlog.bindingModel;

import javax.validation.constraints.Size;

public class UserBindingModel {
    @Size(min = 1)
    private String email;

    @Size(min = 1)
    private String fullName;

    @Size(min = 1)
    private String password;

    @Size(min = 1)
    private String confirmPassword;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
